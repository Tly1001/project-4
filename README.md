# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) General Assembly Project #4: V & N Beauty and Nails 

<a href="https://vnbeauty.herokuapp.com/">Deployed Link<a/>

The fourth project is to **build a full-stack application**.

### Technical Requirements

Brief:

* **Time given** - 8 days.
* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app can have a router** - with several "pages", this is up to your disgression and if it makes sense for your project.
* **Include wireframes** - that you designed before building the app.
* **Be deployed online** and accessible to the public.

---

## Concept

This was a website I made for my mum's beauty salon, where my main focus for this was to create a simple, elegant design that she could easily manage herself.

## Functionality

* Register and Login
* Show the location and contact details of the salon.
* Show an index of services and pricing.
* Editable menu from the admin page.
* Book a time slot for services.

## Technologies Used

* JSX
* CSS
* JavaScript
* React.JS
* React-router-dom
* Python
* Django
* Axios
* Bulma
* Insomnia
* Mapbox API

---

## Walk-Through

### Home Page

<img src="https://imgur.com/vzT0BoL.jpg">

### Contacts Page

<img src="https://imgur.com/PKJuadd.jpg">

### Menu Page

<img src="https://imgur.com/arodbCp.jpg">

---

## Timeline breakdown

**Day 1:** Designed figma, one-to-one and one-to-many relationships for django.

**Day 2:** Created backend for login and registration, started on menu app.

**Day 3:** Completed menu backend.

**Day 4:** Navigation bar, footer, front page.

**Day 5:** Sidebar, menu data extraction and display for frontend.

**Day 6:** Created booking backend.

**Day 7:** Implimented booking for frontend.

**Day 8:** Final bug fixes and styling.

---

## Wireframe

<a href="https://www.figma.com/file/Y1gbyc00bHPZqZpkZwb8Jd/Dinder?node-id=0%3A1">Figma link<a/>

Before I started I created the overall wireframe for the pages built in ***Figma***. I spent a lot of time on the designing phase due to this being for my Mum and I am quite proud with how it came out.

<img src="https://imgur.com/KO7wk1V.jpg">

Here are the relationships for the backend.

<img src="https://imgur.com/J3mZYAK.jpg">

## Featured code

### Triple nesting data for the menu

The functionality is to pass the menu to the frontend in a nested package so that it can cleanly be mapped in the frontend. Connecting from the top, a service such as 'massage' has sub-services such as 'head' or 'neck', and sub-services are broken into singular services such as 'head massage' or 'back massage'.

```
class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = '__all__'

class ServiceSubTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceSubType
        fields = '__all__'

class ServiceTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceType
        fields = '__all__'

# * Should give nested objects of sub-types, services
class PopulatedSubTypeSerializer(ServiceSubTypeSerializer):
    services = ServiceSerializer(many=True)
    
# * Should give nested objects of types, sub-types, services
class PopulatedServiceTypeSerializer(ServiceTypeSerializer):
    sub_services = PopulatedSubTypeSerializer(many=True)
```

Displaying it was another issue, using map to unpackage each layer proved to be a React problem where it would short circuit the mapping, only displaying the deepest nest. I eventually worked around this by pushing all the data into an array and returning that at the end of the function.

```
const initialState = {
  data: null,
  error: null,
  loading: true
}

function Menu() {
  const [services, setServices] = React.useState(initialState)
  const history = useHistory()
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getServices()
        setServices({ data: res.data, loading: false, error: null })
        // console.log(res.data)
      } catch (err) {
        setServices({ data: {}, loading: true, error: true })
        history.push('/notfound')
      }
    }
    getData()
  }, [history])

  return (
    <section className="menu-wrap">
      <div className="services">
        { services.loading ?
          <Spinner />
          :
          // * types
          services.data.map(type => {
            const menu = []
            menu.push(<p key={type.name} className="type">{type.name}</p>)
            // * sub-types
            type.sub_services.map(subType => {
              menu.push(<p key={subType.name} className="sub-type">{subType.name}</p>)
              // * services
              subType.services.map(service => {
                menu.push(
                  <div className="service-wrap">
                    <p key={service.name} className="service">{service.name}</p>
                    <p key={`${service.name}price`} className="service-info">£{service.price} <span>/</span> {service.duration} mins</p>
                  </div>
                )
              })
            })
            return menu
          })
        }
      </div>
    </section>
  )
}

export default Menu
```

## Wins and Blockers

The biggest challenge was implimenting the booking system, I struggled to think of the logic with how it would work. Then when I got down to getting a time picker, the data being given turned out to be used from a framework called Moment.JS that was new to me.

The biggest win was finishing the backend. I drew a lot of blanks when it came to django and trying to understand how to triple nest the serializers for the menus was quite a challenge for me. Towards the end of the project I began to get a grasp of how it works which makes me excited to see my next attempt with django again.

---

## Bugs

**When an item on the menu is changed from the admin side, the order of items are changed**

This is a Django issue that I didn't realise until the end, I do not fully understand it yet but that is definitely something to take into account for future reference.

**The time picker needs to be clicked again after picking or won't register**

This was a big issue with both the time picker and my logic for it. The app initially crashed when anything was clicked on the time picker because it was expecting information, but the picker required a date, then a time to be clicked. The only way I could think around it was an if statement to check whether the time/date variable was truthy, thus a second click.

---

## Future Features

* Payment.
* Auto Emailing and promotions.

---

## Key Lessons Learnt

From this project I learned a basic grasp of Django with serializers, views, and also how app relationships work. This project felt small scale but what I learned in the process was invaluble to my future progress with the Django framework and PostgreSQL.
