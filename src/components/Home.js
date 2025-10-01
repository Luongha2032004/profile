import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>Huỳnh Lương Hà</span>
            </div>
            <div className="des">
                {/* 30 */}
                Xin chào, tôi là Lương Hà, một lập trình viên đầy nhiệt huyết, yêu thích việc biến ý tưởng thành trải nghiệm số.
Với nền tảng vững chắc về React, Node.js và các công nghệ web hiện đại, tôi xây dựng các ứng dụng không chỉ hữu ích mà còn trực quan và thân thiện với người dùng.
Ngoài lập trình, tôi thích giải quyết vấn đề, học hỏi các kỹ năng mới và hợp tác với những người có cùng niềm đam mê với công nghệ và đổi mới.
            </div>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>  
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>20/03/2004</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
