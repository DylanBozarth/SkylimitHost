import React from 'react';
import Carousel from 'nuka-carousel';

class Testimonials extends React.Component {
  render() {
    return (
    <Carousel>
      <div>
      <img alt="a" className="testimonial-image" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"  /> 
      <p className="testimonialtext">"Skyler helped me reach a PR for my Sprint race and Ironman 70.3. I had over a 1 hour improvement for the Ironman 70.3 race. She would jump in and swim, run, or bike with me and not just tell me what to do. She believed in me more than I did which made me push even harder.  She is very positive, patient, and knows when she needs to be tough. I would highly recommend her as a coach!"
        </p>
        <p className="testimonialauthor">-Eric, 1:1 training for IM Boulder 70.3</p>
       </div>
       

        
        <div className="testimonial-image-box">
      <img alt="a" className="testimonial-image" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"  /> 
        <p className="testimonialtext">"I decided in 2018 I was going to do my second 70.3 in 2019. Although I had a training plan from my first time around, I really wanted a coach to get me through it again. I was not just looking for someone who could provide me with a training plan but someone who knew when adjustments needed to be made. That's where Skyler came in. She had an option for a training plan with weekly check-ins and that was exactly what I needed...When I had concerns over my swim (when didn't I have concerns??) she reached out to not only give me pointers for improving my technique and time but also tips for helping me calm down because I was having anxiety issues. If I wasn't ready for a particular workout (descents on the bike scare me) she adjusted my schedule to put it off until I was ready. All around, Skyler was just a great fit for me. She had more faith in my ability to get through this race than I did! We had a great rapport and I really enjoyed having her as my coach!"
        </p><p className="testimonialauthor">-Tara, 1:1 training for IM Boulder 70.3</p>
        </div>
        
      
        
        <div className="testimonial-image-box">
      <img alt="a" className="testimonial-image" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"  /> 
        <p className="testimonialtext">"Skyler taught me how to swim with patience and persistence. She is approachable and attentive. She provides meaningful feedback and suggests effective regimen. She taught me how to swim, and improve strength, speed and posture."
        </p><p className="testimonialauthor">"-Vikas Sarawat, 1:1 swim lessons"</p>
        
        </div>
        
          
      </Carousel>
    );
  }
}
export default Testimonials