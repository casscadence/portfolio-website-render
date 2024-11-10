import { useState, useEffect } from 'react'
import './index.scss'

const useFetch = (url) => {
  const [fetchdata, setFetchData] = useState(['']);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setFetchData({ title: json.title, date: json.date, desc: json.desc, type: json.type, tools: json.tools, contribution: json.contribution, number: json.number, length: json.length})
    })
  },[url]);
  
  return fetchdata;
}; 

const Testing = ({setLoaderName, link}) => {

  const projectDataObjects = [{id: 1, logo: 'ab', category: 'models', title: 'Modeling', client: 'personal', role: 'N/A', date: '2017 +', desc: 'Miscellaneous modeling works & works in progress', type: '3D Modeling', tools: 'Maya, Blender, Substance Painter, Illustrator', contribution: 'N/A'},
  {id: 2, logo: 'psi', category: 'graphics, animation, programming', title: 'Agent Silhouette', client: 'PSI Games', role: 'Lead Artist/Programmer', date: '2016', desc: 'Deep underground in a faraway jungle, hides an expansive complex dedicated to the heinous plans of an evil mad scientist. Your mission, should you choose to accept it, is to infiltrate the facility, using your graceful agility and expert stealth tactics to navigate the area and avoid its hostile inhabitants. Reach your objective without being seen, thwart the villain’s master plan, and save the world!', type: 'Single Player, third person, side-scrolling, stealth platformer', tools: 'Unity, Visual Studio, Photoshop, Illustrator', contribution: 'environment, animation, UI, programming, logo, marketing'},
  {id: 3, logo: 'e2i', category: 'models, animation, programming', title: 'Harbor', client: 'e2i Creative', role: 'Lead Artist/Programmer', date: '2018', desc: "Works from the PTSD Project: Harbor during the internship. The project involved continuing from the previous team's progress on a VR experience which assists medical professionals in caring for PTSD patients with a soothing atmosphere and in assessing PTSD with objects that created interest. The images above showcase the changes made from the beginning of the project to our team's completion of the project.", type: 'Exploration', tools: 'Unity, Visual Studio, Maya, Blender, Substance Painter, Photoshop', contribution: "modeling, unwrapping, texturing, programming, sound, FX, animation"},
  {id: 4, logo: 'e2i', category: 'models, animation, programming', title: 'Cooking', client: 'e2i Creative', role: 'Artist', date: '2018', desc: "Works from the Cooking Project during the internship. The project involved an app which used foods and cooking items as obstacles and power-ups in a temple run style game of the endless runner genre, in order to aid Parkinson's patients with diet and nutrition to ease symptoms and teach others about Parkinson's and caring for health.", type: 'Single Player, third person, endless runner', tools: 'Maya, Blender, Substance Painter, Photoshop', contribution: 'modeling, unwrapping, texturing'},];

  const [data, setData] = useState(projectDataObjects);
  const [contributions, setContributions] = useState([]);
  const [models, setModels] = useState(['modeling', 'surgery', 'burgers', 'girl']);
  const [button, setButton] = useState('first');

  const fetchdata = useFetch(`/testing`);

  useEffect(() => {
    setContributions(data[0].contribution.split(/[\s,]+/));
  }, [link])

  useEffect(() => {
    document.title = 'Portfolio | Arielle Bartee';
    setLoaderName('');
    setTimeout(() => {
      return (setLoaderName('loader-end'));
    }, 3000);
    
    fetch('/testing')
    .then(res => console.log(res))
  }, [])

  useEffect(() => {
    switch(button) {
      case 'first':
        setModels(['modeling', 'surgery', 'burgers', 'girl']);
        break;
      case 'second':
        setModels(['surgery', 'burgers', 'girl', 'modeling']);
        break;
      case 'third':
        setModels(['burgers', 'modeling', 'surgery', 'girl']);
        break;
      case 'fourth':
        setModels(['girl', 'modeling', 'surgery', 'burgers']);
        break;
    }
  }, [button, link])

  return (
    <>
      <div className='container project-page'>
        <div className='text-container'>
          <div className='text-zone'>

          <div className='project-desc'>
              <div className='project-header'>
              <div className='subtitle'><img src={require(`../../assets/logos/${data[0].logo}.png`)} alt='' /><h3>{data[0].client}</h3></div>
              <h1>{fetchdata.title}</h1>
              </div>
              
              <div className='details'>
                <div>
                  <h2>Date</h2>
                  <ul>
                    <li className='date'>{data[0].date}</li>
                  </ul>
                </div>
                <div>
                  <h2>Tools</h2>
                  <ul>
                    <li>Unity</li>
                    <li>Visual Studio</li>
                    <li>Maya</li>
                    <li>Blender</li>
                    <li>Substance Painter</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
                <div>
                  <h2>Contributions</h2>
                  <ul>
                    {contributions === 'N/A' ? <li>N/A</li> : data[0].contribution.split(/[\s,]+/).map((_, index) => (
                      <li key={index}>{_}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='description'>
                <h2>Description</h2>
                <p>
                  {data[0].desc}
                </p>
              </div>
            </div>
            <div className='project-image'>
              <div className='project-image-title'>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Client</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data[0].category}</td>
                      <td>{data[0].client}</td>
                      <td>{data[0].role}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='project-image-photo'>
                <div key={`${models[0]}${link}`} className='project-img-wrapper'>
                  {link !== 'modeling' ? 
                    <img className='animate-img overflow' src={require(`../../assets/images/projects/${data[0].title.toLowerCase()}.png`)} alt='' /> 
                    :
                    <>
                    <img key={`${link}1`} className='animate-img' src={require(`../../assets/images/projects/${models[0]}.png`)} alt='' />
                    <img key={`${link}2`} className='animate-img' src={require(`../../assets/images/projects/${models[1]}.png`)} alt='' />
                    <img key={`${link}3`} className='animate-img' src={require(`../../assets/images/projects/${models[2]}.png`)} alt='' />
                    <img key={`${link}4`} className='animate-img' src={require(`../../assets/images/projects/${models[3]}.png`)} alt='' />
                  </>
                  }
                </div>
                <div className='background-gradient'></div>
              </div>
              {link === 'modeling' ? 
              <div className='project-buttons-wrapper'>                
                <div className={`project-buttons ${button} ${link}`}>
                  <div className='project-button-wrapper'><div className={`project-button ${button === 'first' ? 'active' : ''}`} onClick={() => setButton('first')}></div></div>
                  <div className='project-button-wrapper'><div className={`project-button ${button === 'second' ? 'active' : ''}`} onClick={() => setButton('second')}></div></div>
                  <div className='project-button-wrapper'><div className={`project-button ${button === 'third' ? 'active' : ''}`} onClick={() => setButton('third')}></div></div>
                  <div className='project-button-wrapper'><div className={`project-button ${button === 'fourth' ? 'active' : ''}`} onClick={() => setButton('fourth')}></div></div>
                </div>
              </div>
              : 
              ''
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testing