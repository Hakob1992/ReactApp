import React from 'react'


function Home() {
  return (

    <div className="main-content">

      <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <div className="presentation">
        <span className="tags">&nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
        <h1>
          <div>Hi,</div>
          I,m <span className="letterH">H</span>akob,
          <div>Web developer.<span className="tags"> &lt;/h1&gt;</span></div>

        </h1>

        <div className="contactMe_btn__block">
          <a href="#" className="contactBtn">Contact Me</a>
        </div>
      </div>
      <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;</span>
      <span className="tags bottom-tagsTwo"> &lt;/html&gt; </span>


      <section className='atomBlock'>
        <div className="center"></div>
        <article className="ring1">
          <div></div>
        </article>
        <article className="ring2">
          <div></div>
        </article>
        <article className="ring3">
          <div></div>
        </article>
      </section>
    </div>

  )
}

export default Home;
