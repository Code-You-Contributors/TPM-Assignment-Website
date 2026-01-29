<template>
  <h3>Keep Building Your Skills</h3>
    <p>The best way to stand out in tech is to continue building a versatile set of skills that compliment what you’ve already learned. <a href="https://docs.google.com/document/d/17Qmi3IZWb3gFGbXMzFEVy4Y5hywEyzDLzn3apoyiZKQ/edit?tab=t.0#heading=h.e33iou4ie5i">This expanded document</a> by Danny Morton has excellent focus areas and additional linked resources for continuing to expand your skillset. Some of the in-demand technologies from Danny’s doc and additional complimentary skills are listed below.</p>
    <div class="skill-grid">
      <div>
        <h4>Expand your GitHub Knowledge:</h4>
        <ul>
          <li>Create branches to protect your Main branch</li>
          <li>Pull Request descriptions keep your commit history organized, for yourself and contributors</li>
          <li><a href="https://github.com/features/actions">GitHub Actions</a> to automate tasks</li>
          <li>Create and run tests regularly</li>
          <li><a href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects">GitHub Projects</a> to keep tasks organized</li>
        </ul>
      </div>

      <div>
        <h4>Useful Web Frameworks:</h4>
        <ul>
          <li><a href="https://flask.palletsprojects.com/en/stable/">Flask</a> (Python)</li>
          <li><a href="https://www.djangoproject.com/">Django</a> (Python)</li>
          <li><a href="https://fastapi.tiangolo.com/">FastAPI</a> (Python)</li>
          <li><a href="https://vuejs.org/">VUE</a> (JavaScript)</li>
          <li><a href="https://react.dev/">React</a> (JavaScript)</li>
          <li><a href="https://angular.dev/">Angular</a> (JavaScript/C#)</li>
          <li><a href="https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui?view=net-maui-9.0">Maui</a> (C#)</li>
          <li><a href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor">Blazor</a> (C#)</li>
        </ul>
      </div>

      <div>
        <h4>Databases to Explore:</h4>
        <ul>
          <li><a href="https://www.mysql.com/">MySQL</a> (Relational)</li>
          <li><a href="http://postgresql.org/">PostgreSQL</a> (Relational)</li>
          <li><a href="https://duckdb.org/">DuckDB</a> (Analytical)</li>
          <li><a href="https://www.mongodb.com/">MongoDB</a> (NoSQL)</li>
          <li><a href="https://redis.io/">Redis</a> (NoSQL)</li>
        </ul>
      </div>

      <div>
        <h4>Data Dashboard Tools:</h4>
        <ul>
          <li><a href="https://www.tableau.com/learn">Tableau</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/paths/dashboard-in-a-day/">Power BI</a></li>
          <li><a href="https://cloud.google.com/looker?hl=en">Looker</a></li>
          <li><a href="https://docs.streamlit.io/get-started">StreamLit</a> (Python)</li>
          <li><a href="https://www.chartjs.org/docs/latest/getting-started/">Chart.js</a> (JavaScript)</li>
        </ul>
      </div>

      <div>
        <h4>Containerization Tools:</h4>
        <ul>
          <li><a href="https://www.docker.com/">Docker</a></li>
          <li><a href="https://kubernetes.io/">Kubernetes</a></li>
        </ul>
      </div>

      <div>
        <h4>Cloud Services:</h4>
        <ul>
          <li><a href="https://aws.amazon.com/">Amazon Web Services</a> (Free Tier Available)</li>
          <li><a href="https://azure.microsoft.com/en-us/">Microsoft Azure</a> (Free Trial Available)</li>
        </ul>
      </div>

      <div>
        <h4>Project and Task Management Tools:</h4>
        <ul>
          <li><a href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects">GitHub Projects</a></li>
          <li><a href="https://www.atlassian.com/software/jira">Jira</a></li>
          <li><a href="https://trello.com/tour">Trello</a></li>
          <li><a href="https://monday.com/partners/projectmanagement">Monday</a></li>
          <li><a href="https://asana.com/">Asana</a></li>
          <li><a href="https://www.notion.com/">Notion</a></li>
          <li><a href="https://obsidian.md/">Obsidian</a></li>
        </ul>
      </div>

      <div>
        <h4>Artificial Intelligence Tools:</h4>
        <ul>
          <li><a href="https://cursor.com/en">Cursor</a></li>
          <li><a href="https://github.com/features/copilot">GitHub Copilot</a></li>
          <li><a href="https://www.anthropic.com/claude-code">Claude Code</a></li>
        </ul>
      </div>

      <div>
        <h4>Cybersecurity Tools & Services:</h4>
        <ul>
          <li><a href="https://www.rust-lang.org/">Rust</a></li>
          <li><a href="https://www.geeksforgeeks.org/python/python-for-cybersecurity/">Python</a></li>
          <li><a href="https://www.openvas.org/">OpenVAS</a></li>
          <li><a href="https://www.splunk.com/">Splunk</a></li>
          <li><a href="https://www.wireshark.org/">Wireshark</a></li>
          <li><a href="https://semgrep.dev/">Semgrep</a></li>
          <li><a href="https://www.redhat.com/en/technologies/management/ansible/security-automation">Ansible</a></li>
          <li><a href="https://cyble.com/">Cyble</a></li>
          <li><a href="https://www.recordedfuture.com/">Recorded Future</a></li>
          <li><a href="https://flashpoint.io/">Flashpoint</a></li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
.skill-grid {
  column-count: 3;
  column-gap: 30px;
}

.skill-grid > div {
  break-inside: avoid;
  display: inline-block;
  width: 100%;
}

@media (max-width: 960px) {
  .skill-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .skill-grid {
    column-count: 1;
  }
}
</style>
