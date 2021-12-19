<template>
<div class="container">
    <div class="panel-group" id="accordion">
        <div v-for="(qa, subject, i) in qaTabs" :key="i">
          <div class="faqHeader">{{subject}}</div>
          <div v-for="(answer, question, j) in qa" :key="j" class="panel panel-default">
              <div class="panel-heading">
                  <h4 class="panel-title">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" :href="'#collapse' + j">{{question}} </a>
                  </h4>
              </div>
              <div :id="'#collapse' + j" class="panel-collapse collapse in">
                  <div class="panel-body">
                      {{answer}} 
                  </div>
              </div>
          </div>    
          <br>      
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'QABySubjects',
  data() {
    return {
      qaTabs: {
        'Time Table': {
          'When do we start?': '5am',
          'when do we go home?': "we don't",
        },
        Corona: {
          'what capsuloe am i?': 'Yes!',
          'should i WORK FROM HOME': 'YES!',
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
body {
  width: 1200px;
}

.faqHeader {
  font-size: 27px;
  margin: 20px;
}

.panel-heading [data-toggle='collapse']:after {
  font-family: 'fontawesome';
  content: '\f054'; /* "play" icon */
  float: right;
  color: #f58723;
  font-size: 18px;
  line-height: 22px;
  /* rotate "play" icon from > (right arrow) to down arrow */
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.panel-heading [data-toggle='collapse'].collapsed:after {
  /* rotate "play" icon from > (right arrow) to ^ (up arrow) */
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  color: #454444;
}
</style>
