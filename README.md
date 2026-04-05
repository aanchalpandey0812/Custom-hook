CUSTOM-HOOK Assignment:In this assignment i have to make a react application that tells how to create and use a custoom hook for fetching data from API.

AS mentor mentioned the requirements such as :
1.custom hook should named as useFetch I did that.
2.i create hook which accept url as input.
3.fetch() method is used to fetch data from API.
4.It is smoothly showing data,loading and error state.
5.proper UI for loading and erroe states.

I kept CSS very simple as i am begginer but i will try to explore it more.

How it works:useFetch takes a URL as input then uses useEffect to call API and useState to store data,loading state and error message,after that it returns the value to App.js and App.js display the fetched data .

common API i used is 'https://jsonplaceholder.typicode.com/posts'.

from this i learned how to create custom react hook how we can fetch data from API efficiently and simple use of useFetch.useStateand useEffect.Also implimentation of loading and error hamdling.
UI and css styling also a little.

How to run:there some set of command to run react projrct so ,
first open the new terminal then give commands like:
npm install (for instalation checkup  to install all the packages)
npm start (run project locally on browser)
http://localhost:3000 opens automatically
then we push the code on github with some simple commands like
git add . (for adding all the files to git repositotry)
git commit -m "CUSTOM-HOOK" (to add description or save changes)
git push (to push the project on git)

netlify project deploy link: https://69d29ac7da331228a71ea9b1--melodious-crostata-f2b855.netlify.app/