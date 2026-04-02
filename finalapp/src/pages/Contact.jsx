import Heading from '../components/Heading';
import ContactBox from '../components/ContactBox';

function Contact() {
  return (
    <div className="min-h-screen bg-[#FFF8E5] shadow-2xl">
        <Heading myTitle="CONTACT US"/>

    <div>
        <ContactBox/>
    </div>
    
</div>

  );

}

export default Contact;