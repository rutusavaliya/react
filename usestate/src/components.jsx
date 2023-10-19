import React from 'react'
import images from './assets/img/images.jpg'
import img2 from './assets/img/img2.jpg'
import img3 from './assets/img/img3.jpg'
import img7 from './assets/img/img7.jpg'
import img5 from './assets/img/img5.jpg'
import img6 from './assets/img/img6.jpg'
import './responsive.css'


function Components() {
    return (
        <>


            <div class="main">
                <h1>Responsive Card Grid Layout</h1>
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={images} alt="" className='w-[500px]'></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={img2} alt="" className='w-[500px]'></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={img3} alt="" className='w-[500px]'></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={img7} alt="" className='w-[500px]'></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={img5} alt="" className='w-[500px]'></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={img6} alt="" className='w-[500px]'></img></div>
                            <div class="card_content">
                                <h2 class="card_title">Card Grid Layout</h2>
                                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Components
