quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length) + 1);
sketch = quick_draw_data_se[random_number];
document.getElementById('sketch_name').innerHTML="sketch to be drawn : "+sketch; 
timer_counter=0;
timer_check="";
draw_sketch="";
answer_holder="";
score=0;
function preload()
{
    classifier=ml5.imgClassifier("DoodleNet");
}                                                                                  