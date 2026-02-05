<template>
  <header>
    <h1>Initial Project Assignment</h1>
  </header>

  <div class="container">
    <section>
      <h2>Project Assignment Overview</h2>
      <p>You will be working on two starter projects. The purpose is to get comfortable with:</p>
      <ul>
        <li>Running and deploying existing code.</li>
        <li>Using branches and version control properly.</li>
        <li>Collaborating in a team environment without breaking the <code>main</code> branch.</li>
      </ul>
      <p>Please fork each repository and clone your copy locally before starting.</p>
      <p>Note the projects don’t have full instructions on how to do different parts. This is to get used to having to look new things up. We are always here to help if you get stuck and can’t get something to work.</p>
    </section>

    <section>
      <h3>Project 1: Running and Deploying an Existing App</h3>
      <p>Repo: <ExternalLink href="https://github.com/dmorton714/CY_project">Dashboard Deployment</ExternalLink></p>
      <p>Goals:</p>
      <ul>
        <li>Get the project running locally.</li>
        <li>Publish it on Streamlit.</li>
        <li>Gain practice working with code you did not write.</li>
      </ul>
      <p>Notes:</p>
      <ul>
        <li>This project includes some Go (Golang) code. You’ll need to install Go and figure out how to run it.</li>
        <li>No edits to the code are required.</li>
        <li>Your task is only to set up, run, and deploy.</li>
      </ul>
      <p>Deliverable:</p>
      <ul>
        <li>When finished send a link of your repo to the person that gave you this assignment</li>
        <li>Send a Streamlit link of the dashboard to the person that gave you this assignment</li>
      </ul>
    </section>

    <section>
      <h3>Project 2: Personal Portfolio Website</h3>
      <p>Repo: <ExternalLink href="https://github.com/CodeYouOrg/CY-portfolio-template/tree/master">Portfolio Template</ExternalLink></p>
      <p>Goals:</p>
      <ul>
        <li>Customize the template with your information.</li>
        <li>Optionally swap out pictures.</li>
        <li>Learn and practice proper Git workflows.</li>
      </ul>
      <p>Branching Guidelines: <ExternalLink href="https://docs.google.com/document/d/1sxmOdZr19dFgSs4NCmIMr-q76K5f_H2aBh16EIBzsMk/edit?usp=sharing">documentation</ExternalLink></p>
      <ul>
        <li>Create a new branch for each section you edit (e.g., <code>about-me</code>, <code>projects</code>, <code>contact</code>).</li>
        <li>After completing a section, switch to <code>main</code>, then make a new branch for the next section.</li>
        <li>Avoid working directly on <code>main</code></li>
          <ul>
            <li>In real-world workflows, we always work in branches to prevent conflicts and code breakage.</li>
          </ul>
      </ul>
      <p>Deliverable:</p>
      <ul>
        <li>When finished send a link of your repo to the person that gave you this assignment</li>
        <li>Send a link to the site deployed on github pages to the person that gave you this assignment</li>
      </ul>
      <h4>Deadlines and Expectations</h4>
      <ul>
        <li><strong>Both projects must be completed before we move on to new work.</strong></li>
        <li><strong>We will review your progress and go over details together at our next meeting.</strong></li>
      </ul>
    </section>
  </div>
</template>

<script>
import ExternalLink from '@/components/ExternalLink.vue';

export default {
  name: 'InitialProjects',
  components: {
    ExternalLink
  }
};
</script>
