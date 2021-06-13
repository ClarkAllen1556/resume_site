<template>
  <div id="resume">
    <h2 id="work-history">Work History</h2>
    <div class="work-entry">
      <h3 id="software-engineer---htm-kk">Software Engineer - HTM K.K.</h3>
      <div class="col-group">
        <div class="even-col">
          <ul class="resume-list">
            <li>Fall 2020 - Current</li>
            <li>Tokyo, Japan</li>
          </ul>
        </div>
        <div class="even-col">
          <p>
            Currently, I am a member of the software development at HTM K.K.
            Here, alongside administration and processing teams, I use my
            expertise in frontend development to improve our two hundred
            client-facing processes.
          </p>
        </div>
      </div>
    </div>

    <div class="work-entry">
      <h3 id="software-engineer---human-resocia-co-ltd">
        Software Engineer - Human Resocia Co., Ltd.
      </h3>
      <div class="col-group">
        <div class="even-col">
          <ul class="resume-list">
            <li>Spring 2020 - Fall 2020</li>
            <li>Tokyo, Japan</li>
          </ul>
        </div>
        <div class="even-col">
          <p>
            At Human Resocia, I was dispatched to NTT Communications Engineering
            where I worked in system design as a software engineer. There, I was
            tasked with solving unique and challenging system integration
            issues. I used a variety of tools to develop new system
            architectures to achieve a flexible system that will meet our
            specific development needs.
          </p>
        </div>
      </div>
    </div>

    <div class="work-entry">
      <h3 id="software-engineering-intern---automationtest-sensus-boise">
        Software Engineering Intern - Automation/Test, Sensus Boise
      </h3>
      <div class="col-group">
        <div class="even-col">
          <ul class="resume-list">
            <li>Fall 2016 - Summer 2019</li>
            <li>Boise, Idaho, United States of America</li>
          </ul>
        </div>
        <div class="even-col">
          <p>
            While I was a student at Boise State University I had the
            opportunity to participate in an ongoing software engineering
            internship at Sensus Boise. At Sensus, I was a member of the quality
            assurance team where I developed and maintained automated testing
            suites for Sensus' distribution automation platform.
          </p>
        </div>
      </div>
    </div>

    <div class="work-entry">
      <h3 id="it-assistant-boise-state-university">
        IT Assistant, Boise State University
      </h3>
      <div class="col-group">
        <div class="even-col">
          <ul class="resume-list">
            <li>Winter 2015 - Fall 2016</li>
            <li>Boise, Idaho, United States of America</li>
          </ul>
        </div>
        <div class="even-col">
          <p>
            During my first year at Boise State, I had the pleasure of working
            with Boise State's Facilities Operations and Maintenance
            department's small independent IT division. Due do Facilities
            Operations' unique needs, we, FOMIT, were a separate division from
            campus OIT. We were tasked with managing various forms of equipment,
            IT hardware/software, task, and inventory databases. /p>
          </p>
        </div>
      </div>
    </div>

    <h2 id="education">Education</h2>
    <div class="work-entry">
      <h3
        id="boise-state-university-bachelors-of-computer-science-minor-of-japanese-studies"
      >
        Boise State University, Bachelor's of Computer Science, Minor of
        Japanese Studies
      </h3>
      <div class="col-group">
        <div class="even-col">
          <ul class="resume-list">
            <li>Summer 2015 - Summer 2019</li>
            <li>Boise, Idaho, United States of America</li>
          </ul>
        </div>
        <div class="even-col">
          <p>
            Student IT Assistant at Boise State University Facilities Operations
            and Maintenance, Member of the Keith Stein Blue Thunder Marching
            Band, Member of Boise State Japan Club, Japanese Language Assistant
            for intermediate Japanese
          </p>
        </div>
      </div>
    </div>

    <div class="work-entry">
      <h3 id="hosei-university-study-abroad">Hosei University, Study Abroad</h3>
      <div class="col-group">
        <div class="even-col">
          <ul class="resume-list">
            <li>Fall 2017 - Summer 2018</li>
            <li>Ichigaya, Tokyo, Japan</li>
          </ul>
        </div>
        <div class="even-col">
          <p>Studied Japanese language and Cultural Studies.</p>
        </div>
      </div>
    </div>

    <div class="work-entry">
      <h3
        id="pasadena-city-college-computer-science-japanese-language-general-education"
      >
        Pasadena City College, Computer Science, Japanese Language, General
        Education
      </h3>
      <div class="col-group">
        <div class="even-col">
          <ul class="resume-list">
            <li>Fall 2012 - Spring 2015</li>
            <li>Pasadena, California, United States of America</li>
          </ul>
        </div>
        <div class="even-col">
          <p>
            Pasadena City College Computer Science Club Vice President, Pasadena
            City College Engineering Club, Member of the Lancer Marching Band.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #resume {
    display: flex;
    flex-direction: column;

    p,
    ul {
      font-size: 0.75rem;
    }

    h2 {
      font-size: 1rem;
    }

    h3 {
      font-size: 1rem;
      font-weight: bold;
    }

    .work-entry {
      .col-group {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        .even-col {
          flex-basis: 100%;
        }
      }

      .resume-list {
        display: flex;
        list-style: inside;
        padding-left: 0;

        li {
          padding-right: 15px;
        }
      }
    }
  }

  h2 {
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    #resume {
      p,
      ul {
        font-size: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      h3 {
        font-size: 1.15rem;
        font-weight: bold;
      }

      .work-entry {
        .col-group {
          display: flex;
          flex-direction: row-reverse;
          .even-col {
            flex-basis: 100%;
          }
        }

        .resume-list {
          display: flex;
          list-style: inside;
          padding-left: 0px;

          li {
            padding-right: 15px;
          }
        }
      }
    }
  }
</style>