# HTML Form Lab

<img src="https://media.giphy.com/media/c1Zf0R8KvtSCI/giphy.gif" width=300>

## Setup
Please clone this repo.

Open "index.html" in your browser for a list of all the challenges.

For each challenge, make sure you are working in the correct folder!

> **Watch Out**: It's easy to code in the wrong `index.html` file!

## Challenges
Please use only html to solve the following mini-challanges.

1. **Login Form**. Create an html `form` with two inputs: one for a username (named "username"), the other for password (named "password") (normally you don't see your password when you type it, so make sure it's blocked out!). What happens in the URL when you click submit?

2. **Doomed Yet?** Create an html `form` that, on submit, sends the user to "hasthelargehadroncolliderdestroyedtheworldyet.com". Hint: what's the form action? Bonus: Can you change the submit button to say "Are we doomed?".

3. **Color Search**. Create an html `form` that contains the html5 color-picker input (named "q"). When the user picks a color and clicks submit, redirect them to, e.g. "https://duckduckgo.com/?q=%2300fa91".

4. **Image Search**. Create an html `form` that has an action of "https://www.google.com/search" and contains three inputs:  
    - a hidden input with a name of "tbm" and a value of "isch".
    - a (required) text input with a name of "q", and a default value of "http status cats".
    - a submit button

    You should end up here: "https://www.google.com/search?tbm=isch&q=http+status+cats"

5. **Github Search**. Create an html `form` that searches github for code examples that match a specific query (`q`) and language (`l`). For example, search results for "form select" in "HTML" files: https://github.com/search?q=form%20select&l=HTML

6. **Movie Search**. Create an html `form` that searches for movies on the OMDB API by title and by year. You will need to take care to use the correct query parameters. The only way to find out what they are is to [read their documentation](http://omdbapi.com/#usage).

7. Bonus: **Return of the Movie Search**. It's great that we can find find data about movies using the Open Movie Database, but it's not very helpful having all that data *somewhere else*. It would be awesome if we could "pull in" that data and use it on our webpage. It's time to learn about AJAX! Your goal is to figure out how to use [jQuery's `get` method](api.jquery.com/jQuery.get/) to request information (JSON) about the movie "Primer". Can you console.log the movie description? HINT: start by hitting the endpoint directly, then figure out how to "drill down" through the json object to get to the data you want.

## Bonuses
* Make you forms accessible by using `label` and user-friendly but using `placeholder`.
* Add some simple validations to your forms so that they do not submit if a user skips a field.
* Make your forms beautiful by using [bootstrap](http://getbootstrap.com/css/#forms).

## Resources
* [HTML Form Reference](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms) is a great resource and has been distilled below.
* [HTML Input Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
* [Native Form Widgets](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/The_native_form_widgets)
* [Form Validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation).
