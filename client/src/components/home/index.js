import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import CV from '../../assets/images/resume/barteearielle_resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faSass, faBootstrap, faJs, faReact, faAngular, faNodeJs, faJava, faPhp, faUnity, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faLeaf, faDatabase, faPaintBrush, faPen } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import './index.scss';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = ({loaderName, setLoaderName, setLink}) => {
  const topRef = useRef();

  const skillsTitle = 'Skills';
  const projectTitle = 'Projects';
  const contactTitle = 'Say Hello!';

  const aboutgroup = [
    "Located in FL, specializing in visual design. I design",
    "works that draw creative minds together and bring",
    "ideas to life. Websites are a canvas reflecting the",
    "heart of a business. Each design tells their story and",
    "learning how to share that story inspires me."
  ];

  const { ref: aboutrefA, inView: aboutrefAVisible } = useInView();
  const { ref: aboutrefB, inView: aboutrefBVisible } = useInView();
  const { ref: aboutrefC, inView: aboutrefCVisible } = useInView();
  const { ref: aboutrefD, inView: aboutrefDVisible } = useInView();
  const { ref: aboutrefE, inView: aboutrefEVisible } = useInView();
  const { ref: lineref, inView: linerefVisible } = useInView();
  const { ref: skillsref, inView: skillsrefVisible } = useInView();
  const { ref: projectref, inView: projectrefVisible } = useInView();
  const { ref: contactref, inView: contactrefVisible } = useInView();

  useEffect(() => {
    setLoaderName('');
    setTimeout(() => {
      return (setLoaderName('loader-end'));
    }, 3000);
    document.title = 'Arielle Bartee | Portfolio';
  }, [])

  const fetchResume = () => {
    fetch(CV).then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'barteearielle_resume.pdf';
          alink.click();
      })
    })
  }

  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
  }

  const homeimgWrapper = gsap.utils.toArray('.home-wrapper');
  homeimgWrapper.forEach((text, i) => {
    let atl = gsap.timeline({
      scrollTrigger: {
        start: 'top',
        end: 'bottom',
        trigger: text,
        scrub: 1,
      }
    });
   atl.fromTo(text,
   { '--skew' : '0deg' },
   { '--skew' : '10deg' }); 
  });

  useEffect(() => {
    const aboutTitle = gsap.utils.toArray('.about-title');
    aboutTitle.forEach((text, i) => {
      let atl = gsap.timeline({
        scrollTrigger: {
          start: 'center 80%',
          end: 'center 10%',
          trigger: text,
          scrub: 2
        }
      });
     atl.to(text,
      { '--width': '100%' }); 
    });

    const projectSection = gsap.utils.toArray('.about-wrapper');
    projectSection.forEach((text, i) => {
      let atl = gsap.timeline({
        scrollTrigger: {
          start: 'top 0%',
          end: 'top 1%',
          trigger: text,
          scrub: 1,
          //markers: true
        }
      });
     atl.to(('.text-zone'),
      { '--background': '#0b0b0b' })
      .fromTo(('.projects-wrapper'),
      { '--title': '#0b0b0b', '--subtitle': '#3d3d3d'},
      { '--title': 'white', '--subtitle': 'lightgray'}); 
    });

    const textElements = gsap.utils.toArray('.text');
    textElements.forEach(text => {
      let atl = gsap.timeline({
        scrollTrigger: {
          start: 'center 80%',
          end: 'center 80%',
          trigger: text,
          scrub: .5
        }
      });
      atl.to(text, {
        "--scale": '100%', 
        ease: 'ease',
      }, 1).to (text.children, {
        backgroundSize: '100%',
        ease: 'ease',
      }, 1)
    });

  }, []);

  return (
    <>
      <div className='home-page'>
        <div ref={topRef} className={`text-zone ${loaderName}`}>
              <div className="home-container">
                <div className='home-wrapper'>
                  <div className='underlay'>
                    <div id='underlay-cover' className='underlay-cover'>
                      <div className='bg-img-wrapper'>
                        {window.innerWidth < 800 ? 
                        <img src={require(`../../assets/images/animegirlbg.png`)} className='bg-img' alt='' />
                        :
                        <img src={require(`../../assets/images/animegirlbgHQ.png`)} className='bg-img' alt='' />
                        }
                      </div>
                    </div>
                  </div>
                  <div className='home-text-wrapper'>
                    <div className={`welcome-header ${loaderName === 'loader-end' ? 'ready' : ''}`}>
                      <h1>Hi, I'm Arielle</h1>
                      <div className='role'>+ Web Developer | Game Designer | Artist</div>
                    </div>
                  </div>
                  <div className='home-img-wrapper'>
                    <div className='girl-img-wrapper'>
                      {window.innerWidth < 800 ? 
                      <img src={require(`../../assets/images/animegirl.png`)} className={`girl-img ${loaderName === 'loader-end' ? 'ready' : ''}`} id='girl' alt='' />
                      :
                      <img src={require(`../../assets/images/animegirlHQ.png`)} className={`girl-img ${loaderName === 'loader-end' ? 'ready' : ''}`} id='girl' alt='' />  
                      }
                      <div className='overlay-girl'></div>
                    </div>
                    <div className='overlay-img-wrapper'>
                      <div className='overlay-img'></div>
                    </div>
                  </div>
                </div>
                <div className='about-wrapper'>
                  <div className='about-text-group'>
                    <div className={`about-reveal-group ${aboutrefAVisible ? 'animate-line' : ''}`}>
                      <p>{aboutgroup[0]}</p>
                    </div>
                    <div ref={aboutrefA} className={`about-reveal-group ${aboutrefBVisible ? 'animate-line' : ''}`}>
                      <p>{aboutgroup[1]}</p>
                    </div>
                    <div ref={aboutrefB} className={`about-reveal-group ${aboutrefCVisible ? 'animate-line' : ''}`}>
                      <p>{aboutgroup[2]}</p>
                    </div>
                    <div ref={aboutrefC} className={`about-reveal-group ${aboutrefDVisible ? 'animate-line' : ''}`}>
                      <p>{aboutgroup[3]}</p>
                    </div>
                    <div ref={aboutrefD} className={`about-reveal-group ${aboutrefEVisible ? 'animate-line' : ''}`}>
                      <p>{aboutgroup[4]}</p>
                    </div>
                    <div ref={aboutrefE} className={`about-line ${linerefVisible ? 'animate-line' : ''}`}></div>
                  </div>
                </div>
                <div ref={lineref} className='skills-wrapper'>
                  <div className='skills-header'><h1 className={`skills-title ${skillsrefVisible ? 'animate-skills-title' : ''}`}>{skillsTitle.split('').map((letter, i) => <span key={i} className='skills-letter'>{letter}</span>)}</h1></div>
                  <div className='skills' ref={skillsref}>
                    <div className='frontend'>
                      <h1>Frontend</h1>
                      <ul>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faCss3} /> CSS</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faSass} /> SASS</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><div className='icon-mask'></div> TypeScript</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faReact} /> React</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faAngular} /> Angular</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faGithub} /> Github</li>
                      </ul>
                    </div>
                    <div className='backend'>
                      <h1>Backend</h1>
                      <ul>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faNodeJs} /> NodeJS</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><div className='icon-mask'></div> Express</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><div className='icon-mask'></div> C#</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faPhp} /> PHP</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faJava} /> Java</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faLeaf} /> Spring</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faDatabase} /> SQL</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faGithub} /> Github</li>
                      </ul>
                    </div>
                    <div className='modeling'>
                      <h1>Modeling</h1>
                      <ul>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faUnity} /> Unity</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><div className='icon-mask'></div> Blender</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><div className='icon-mask'></div> Maya</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><div className='icon-mask'></div> Substance Painter</li>
                      </ul>
                    </div>
                    <div className='graphics'>
                      <h1>Graphics</h1>
                      <ul>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faPaintBrush} /> Photoshop</li>
                        <li className={`${skillsrefVisible ? 'animate-li' : ''}`}><FontAwesomeIcon icon={faPen} /> Illustrator</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="projects-wrapper">
                  <div className='projects-header'>
                    <h1 className={`projects-title ${projectrefVisible ? 'animate-projects-title' : ''}`}>{projectTitle.split('').map((letter, i) => <span key={i} className='project-letter'>{letter}</span>)}</h1>
                    <p>
                      Selected works and personal projects
                    </p>
                  </div>
                  <NavLink to={`3D/Modeling`} ref={projectref} className="item item--medium" onClick={() => setLink('modeling')}>
                    <h1 className="text"><span className='project-title'>MODELING</span><span className='date-clipped'>2021</span><span className='clipped'>MODELS</span><div className='arrow-mask'></div></h1>
                  </NavLink>
                  <NavLink to={`2D/Agent-Silhouette`} className="item item--medium" onClick={() => setLink('agent silhouette')}>
                    <h1 className="text"><span className='project-title'>AGENT SILHOUETTE</span><span className='date-clipped'>2021</span><span className='clipped'>GRAPHICS</span><div className='arrow-mask'></div></h1>
                  </NavLink>
                  <NavLink to={`3D/Harbor`} className="item item--medium" onClick={() => setLink('harbor')}>
                    <h1 className="text"><span className='project-title'>HARBOR</span><span className='date-clipped'>2021</span><span className='clipped'>MODELS</span><div className='arrow-mask'></div></h1>
                  </NavLink>
                  <NavLink to={`3D/Cooking`} className="item item--medium" onClick={() => setLink('cooking')}>
                    <h1 className="text"><span className='project-title'>COOKING</span><span className='date-clipped'>2021</span><span className='clipped'>MODELS</span><div className='arrow-mask'></div></h1>
                  </NavLink>
                </div>
                <div className='contact-wrapper'>
                    <h1 className={`contact-title ${contactrefVisible ? 'animate-contact-title' : ''}`}>
                      {contactTitle.split('').map((letter, i) => <span key={i} className='contact-letter'>{letter}</span>)}
                    </h1>
                    <div ref={contactref} className='footer-links'>
                      <div>
                        <ul>
                          <li><a href="https://linkedin.com/in/arielle-bartee"><strong className='social-brand'>LinkedIn </strong><div className='arrow-mask'></div></a></li>
                          <li><a href="https://join.skype.com/invite/eSqj1ldMJ7dH"><strong className='social-brand'>Skype </strong><div className='arrow-mask'></div></a></li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li><a href="https://github.com/casscadence"><strong className='social-brand'>Github </strong><div className='arrow-mask'></div></a></li>
                          <li><a href="https://discordapp.com/users/casscadence#3444"><strong className='social-brand'>Discord </strong><div className='arrow-mask'></div></a></li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li className='social-email'>
                            <a href="mailto:arielle.bartee@gmail.com">
                              <strong>Email</strong>
                              <p>casscadence<span>@</span>gmail.com</p>
                            </a>
                          </li>
                          <li className='social-cv' onClick={fetchResume}><strong>Download CV</strong></li>
                        </ul>
                      </div>
                    </div>
                    <div className='footer'>AB Portfolio <span>2024 &#xA9;</span> Arielle Bartee</div>
                </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default Home