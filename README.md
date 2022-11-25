Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@Wizzy-05 
Wizzy-05
/
Tsks.
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Wizzy-05/Tsks.
 1 branch
 0 tags
Latest commit
@Wizzy-05
Wizzy-05 Update README.md
 1
ed968f6
10 days ago
Git stats
 31 commits
Files
Type
Name
Latest commit message
Commit time
public
Og links
14 days ago
src
Fixed tasks and completed tasks bugs
10 days ago
.gitignore
Initialize project using Create React App
last month
README.md
Update README.md
10 days ago
package-lock.json
Completed Desktop View Of Accounts Page
last month
package.json
Completed Desktop View Of Accounts Page
last month
README.md
Tsks - Task Tracker Web Application.
Table of contents
Overview
Screenshot
Links
My process
Built with
Continued development
Useful resources
Author
Acknowledgments
Overview
Tsks...a web application that is used to keep track of daily tasks in life.
Screenshot
tsksAccount

S<img width=

tsksCollections

Links
Solution URL: (https://github.com/Wizzy-05/Tsks)
Live Site URL: (https://tsks-three.vercel.app/)
My process
Built with
CSS custom properties
Flexbox
CSS Grid
Mobile-first workflow
React js - JS library
Sass - CSS Preprocessor
Firebase - Backend as a Service.
Some Nice Stuffs
      const handleSubmit = async(e) => {
        e.preventDefault();
        if (taskRef.current.value === "") {
            setValid("Enter a valid input");
            return
        }else{
            setValid("Add a Task");
        }

        setNum(tasks.length + 1);

        await addDoc(collection(db,`${authentication.currentUser.uid}-${General}`), {
            text:taskRef.current.value.toLowerCase(),
            day:day
        })
        taskRef.current.value = "";
      } 
      %home-error{
          width: 100%;
          height: 100vh;
          background-image: url(./assets/Desktop/Error.png);
          background-repeat: no-repeat;
          background-size: cover;
          display: grid;
          grid-template-columns: 150px 1fr 150px;
          grid-template-rows: 80px 350px 1fr 250px 400px 80px;
          grid-template-areas:
          'div nav divs'
          'div header divs'
          'div image divs'
          'div expertise divs'
          'tsksPeople tsksPeople tsksPeople'
          'footer footer footer';
      }
      <div className="expertise" id="features">
        <h2>Harness Expertise, Unleash Innovations</h2>
        <p>
          Whether you are in the office, school, or at home, TSKS can always meet your requirements for instant creativity and collaboration in daily-life           scenarios. We will always help you convey passion, inspire innovation, and stand out among peers, whether you are a business professional or a             student.
        </p>

        <NavLink to="/SignUp" style={{textDecoration:"none"}}>
          <Button className='black' variant="contained">Explore Tsks</Button>
        </NavLink>

      </div>
Continued development
Css Grid
Sass functions
React js
Sass
Node js
Express js
Useful resources
Firbase Docs: This helped me while working with Backend. I'll Like to work with it in upcoming projects.
Author
Github - @Wizzy-05
Twitter - @ahuzi_wisdom
Acknowledgments
I really appreciate Harry @OpeAbidemi.

About
Tsks...a web application that is used to keep track of daily tasks in life . Get that satisfaction upon completion

tsks-three.vercel.app/LandingPage
Topics
sass firebase reactjs rwd full-stack
Resources
 Readme
Stars
 1 star
Watchers
 1 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Environments 1
 Production Active
Languages
SCSS
50.7%
 
JavaScript
47.2%
 
HTML
2.1%
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
