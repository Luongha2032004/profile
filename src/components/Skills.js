import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'Tôi xây dựng cấu trúc của các trang web bằng HTML5 rõ ràng, ngữ nghĩa, đảm bảo khả năng truy cập và nền tảng vững chắc cho mọi dự án.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'Sử dụng CSS hiện đại, bao gồm Flexbox, Grid và hoạt ảnh, tôi tạo ra những thiết kế đáp ứng, thanh lịch và hấp dẫn về mặt hình ảnh cho mọi thiết bị.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'JavaScript mang lại tính tương tác cho web. Tôi phát triển các tính năng động, tối ưu hóa hiệu suất và làm việc với các tiêu chuẩn ES6+ cho các ứng dụng hiện đại.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'Với React, tôi tạo ra các ứng dụng nhanh, linh hoạt, tập trung vào tái sử dụng component và quản lý state hiệu quả.',
    icon: faReact
  },
  {
    name: 'VueJs',
    des: 'Vue mang đến sự gọn nhẹ và linh hoạt. Tôi dùng Vue để xây dựng giao diện trực quan, dễ mở rộng và thân thiện với người phát triển.',
    icon: faVuejs
  },
  {
    name: 'Laravel',
    des: 'Laravel giúp tôi xây dựng backend mạnh mẽ và bảo mật. Tôi phát triển API, hệ thống đăng nhập và xử lý logic phức tạp một cách dễ dàng.',
    icon: faLaravel
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        👉 Sau đây là một số công nghệ cốt lõi mà tôi sử dụng hàng ngày để xây dựng các ứng dụng web sạch, hiệu quả và thân thiện với người dùng.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

