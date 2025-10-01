import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '0865887574'
  },{
    title: 'Email',
    value: '22t1020591@gmail.com'
  },{
    title: 'facebook',
    value: 'Huỳnh Lương Hà'
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Tôi luôn sẵn sàng đón nhận những cơ hội, sự hợp tác và dự án mới. 
Hãy thoải mái liên hệ nếu bạn có thắc mắc, muốn hợp tác,
hoặc chỉ đơn giản là chào hỏi. Tôi sẽ liên hệ lại với bạn sớm nhất có thể!
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
