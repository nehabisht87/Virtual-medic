import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './Medicines.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
        id:1,
        username:'Paracetamol',
        testimonial:'Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain. At a standard dose, paracetamol only slightly decreases body temperature; it is inferior to ibuprofen in that respect, and the benefits of its use for fever are unclear. ',
    },
    {
        id:2,
        username:'Ibuprofen',
        testimonial:'Ibuprofen is a medication in the nonsteroidal anti-inflammatory drug class that is used for treating pain, fever, and inflammation. This includes painful menstrual periods, migraines, and rheumatoid arthritis. It may also be used to close a patent ductus arteriosus in a premature baby. '
    },
    {
        id:3,
        username:'Cetrizine',
        testimonial:'Cetirizine, sold under the brand name Zyrtec among others, is a second-generation antihistamine used to treat allergic rhinitis, dermatitis, and urticaria. It is taken by mouth. Effects generally begin within an hour and last for about a day.'
    },
    {
        id:4,
        username:"Ciprofloxacin",
        testimonial:"Ciprofloxacin is an antibiotic used to treat a number of bacterial infections. This includes bone and joint infections, intra abdominal infections, certain type of infectious diarrhea, respiratory tract infections, skin infections, typhoid fever, and urinary tract infections, among others."
    },
    {
        id:4,
        username:"Azithromycin",
        testimonial:"Azithromycin is an antibiotic medication used for the treatment of a number of bacterial infections. This includes middle ear infections, strep throat, pneumonia, traveler's diarrhea, and certain other intestinal infections."
    }
]
function Medicines() {
    return (<Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        { data.map(user=>(
            <SwiperSlide key={user.id} className="slide">
                <div className="slide-content">
                    
                    <h5 className="username1"><b>{user.username}</b></h5>
                    <p className="user-testimonial">"<i>{user.testimonial}</i>"</p>
                </div>
            </SwiperSlide>
        ))}
        ...
      </Swiper>
        
    )
}

export default Medicines;


