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

## Wireframe

<a href="https://www.figma.com/file/Y1gbyc00bHPZqZpkZwb8Jd/Dinder?node-id=0%3A1">Figma link<a/>

Before I started I created the overall wireframe for the pages built in ***Figma***. I spent a lot of time on the designing phase due to this being for my Mum and I am quite proud with how it came out.

<img src="https://imgur.com/KO7wk1V.jpg">

Here are the relationships for the backend.

<img src="https://imgur.com/J3mZYAK.jpg">

## Featured code

### Triple nesting data for the menu

This took me much longer than I expected it to be. The functionality is to pass the menu to the frontend in a nested package so that it can cleanly be mapped in the frontend.

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

## Wins and Blockers

The biggest challenge was implimenting the booking system, I struggled to think of the logic with how it would work. Then when I got down to getting a time picker, the data being given turned out to be used from a framework called Moment.JS that was new to me.

The biggest win was finishing the backend. I drew a lot of blanks when it came to django and trying to understand how to triple nest the serializers for the menus was quite a challenge for me. Towards the end of the project I began to get a grasp of how it works which makes me excited to see my next attempt with django again.

---

## Future Features

* Payment.
* Auto Emailing and promotions.

---

## Key Lessons Learnt

From this project I learned a basic grasp of Django, and how serializers work. As well as app relationships. This project felt small scale but what I learned in the process was invaluble to my future progress with the Django framework and PostgreSQL.
