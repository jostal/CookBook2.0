# CookBook2.0
### This webapp stores recipes that can be added/edited as the user wishes. Each recipe is organized by category which can also be edited. This is a revision of "CookBook"

#### Technologies: NextJS, Django REST, Python, HTML, CSS, Tailwind, Vercel

I created this as a storage place for any recipes that I want to save for later use. To achieve this I used a Djano REST API for the backend, and a NextJS frontend.

I decided to use Django for the backend because I thought that the Django Models provided the perfect way to store the type of data that needed saving. That combined with the easy serialization made Django a great choice to use for this backend.
The Django REST API saves all info needed about a category or recipe (ingredients, procedure, name...).

I created the frontend using ReactJS and Bootstrap for styling. I chose ReactJS beca use the way it uses components works really well for the kind of app I wanted to create, and I find ReactRouter to be very useful and easy in creating a multi-page site that is easy to navigate.
I decided to use Bootstrap for styling because I saw the 'cards' feature, which was what I was picturing to list the recipes and categories. I learned a lot about Bootstrap am now much more confident in styling web pages using it.

The main challenge I faced while creating this figuring out how to communicate information between pages. I needed to communicate information between pages in order to know
what category or what recipe had been redirected to so the appropriate recipes or recipe page could be displayed. After struggling for a while trying to figure it out,
I found out the solution was actually quite simple. If I used this.props.match.params.x (x=whatever info I want to pass), I could pass info such as name or id to the new page.
Using this, I was then able to find the category or recipe matching the id or name that was passed, and get all the information about it.

#### Categories Page:
![](https://josephtalon.ca/_next/image?url=%2Fcategories.png&w=828&q=75)

#### Creating/editing a recipe/category
![](https://josephtalon.ca/_next/image?url=%2FcookEdit.png&w=384&q=75)

#### Recipe Page:
![](https://josephtalon.ca/_next/image?url=%2Frecipe.png&w=828&q=75)

Please see my repository "CookBook" for the original version.
