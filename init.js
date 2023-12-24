//how many images we have
$slides: 4;

// how much we want each slide to show
$time_per_slide: 4;

// total time needed for full animation
$total_animation_time: $time_per_slide * $slides;

body{
  background:#000;
}
.container{
  margin:50px auto;
  width:500px;
  height:300px;
  overflow:hidden;
  border:10px solid;
  border-top-color:#856036;
  border-left-color:#5d4426;
  border-bottom-color:#856036;
  border-right-color:#5d4426;
  position:relative;

}
.photo{
  position:absolute;
  animation:round #{$total_animation_time}s infinite;
  opacity:0;

}
@keyframes round{
  25%{
    opacity:1;
  }
  40%{
    opacity:0;
  }
}

@for $index from 1 to $slides + 1{
  img:nth-child(#{$index}){
    animation-delay:#{$total_animation_time - $time_per_slide * $index}s
  }
}
