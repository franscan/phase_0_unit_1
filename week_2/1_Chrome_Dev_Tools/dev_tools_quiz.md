#### Include an inline screenshot of your codeschool's points from the profile page:
<img src=http://i.imgur.com/wL2751T.png>

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  The elements tab allows for this, which when clicked opens a two window panel. Panel on the left shows all the HTML code of that webpage and the panel on the right displays the styles of whatever element of the HTML is highlighted. It should be noted that the CSS panel brings info from every single stylesheet that affects the mentioned element, showing which part of its style it takes from each stylesheet.

  * Javascript Debugging
  I would do JavaScript debugging from the sources tab, where you can run the scripts and it will stop execution when finding an error

  * Performance Optimization 
performance optimization would be done from the pagespeed tab which is available once you download the plugin pagespeed insights for chrome. This plugin runs a check on you rwebsite and tells you all the actions you can take in order to make your wensite run faster.

* What's the quick key for your OS to spawn the Dev Tools inspector?
CMD + ALT + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  The current background color for the website is #0b0f11, which is not pure black but 35.3% cyan, 11.8% magenta, 0% yellow and 93.3% black (this is CMYK, RGB values are 4.3% red, 5.9% green and 6.7% blue).

  * Tweak the background color to white.
    * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
    * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
    * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
http://i.imgur.com/wAt0uar.png
* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
The whole center section of the webpage is a GIF image designated by one of the CSS stylesheets, that is superimposed over the text. I do not know however the presence of this image has suppressed the possibility of selecting the text altogether.

* Go to www.ticketswizard.com and analyze the page.  
* What is the largest image on the website? 
The largest image in the home page is of what appears tobe times square and it's named 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
* Explain how you would find out this information, and list the URL of offending image here and how big it is.
Opened the inspector, went to the network tab and reloaded the web with clean cache. Sorted by size and opened the largest image in the list in a new tab. http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
The lowest hanging fruit is the compression of 18 images, which would result in 159.5KiB being eliminated