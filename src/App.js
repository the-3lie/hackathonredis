import logo from './assets/logoHackaRedis.png';
import photo from'./assets/image.png';
import image from'./assets/image2.jpg';
import img from'./assets/image_2.jpg';
import imageZ from'./assets/imagez.jpg';
import imge from'./assets/télécharger.jpeg';
import landing from './assets/landing_page.jpg';
import landing2 from './assets/landing_page2.jpg';
import landing3 from './assets/landing_page3.jpg';
import landing4 from './assets/landing_page4.jpg';
import { BrowserRouter as Router, Route, Routes, link } from 'react-router-dom';
import './App.css'; 
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  document.title = "Landing Page Hacka Redis"; 
  return (
    <div className="App container-fluid">
      <nav className='nav d-flex justify-content-between align-items-center p-3 mb-3 fixed-top bg-body-tertiary'>
        <div className='d-flex align-items-center'>
          <img src={logo} className='border-0' alt="Logo Redis" style={{ height: '40px' }} />
        </div>
        <div class="d-flex align-items-center mb-3">
          <a href="https://hackaredis.vercel.app/login" className='btn btn-info text-white fw-semibold px-3 d-flex gap-2 align-items-center'>
            <i className="bi bi-people-fill"></i> S'inscrire
          </a>
        </div>
      </nav>
      <main className='row d-flex flex-column md-flex-md-row flex-lg-row pb-5 mt-5 pt-5 mb-5' style={{height: '100vh'}}>
        <div className='col-12 mb-4 m-lg-0 col-md-6 col-lg-6 col-xl-6 d-flex flex-column text-start text-wrap'>
          <h1 className='display-1 fw-bold'>Participez au Hackaton officiel</h1>
          <p className='fs-5 text-muted mb-4'>Plateforme dédiée au concours : inscrivez votre équipe et enchaînez les défis du hackaton avec un démarrage automatique du premier défi.</p>
          <div class="d-flex flex-wrap gap-3 mt-4">
              <span class="badge bg-primary fs-6 p-2"><i class="bi bi-calendar-event me-3"></i>03-12 Décembre 2025</span>
              <span class="badge bg-success fs-6 p-2"><i class="bi bi-geo-alt me-3"></i>IUA, corniche</span>
              <span class="badge bg-info fs-6 p-2"><i class="bi bi-people me-3"></i>Équipes de 3</span>
          </div>
          <div className='d-flex align-items-center mt-3'>
            <a href=" https://hackaredis.iua-redis.tech " className='btn btn-info text-white fw-medium '><i className="bi bi-trophy me-3"></i> Créer mon équipe</a>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-start'>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={landing2} class="img-fluid object-fit-cover border rounded" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={landing3} class="img-fluid object-fit-cover border rounded" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={imageZ} class="img-fluid object-fit-cover border rounded" alt="..."/>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className='row d-flex flex-column flex-md-row flex-lg-row pt-5 my-5  text-white p-4 mb-0 custom-shadow' style={{backgroundColor : " #22B8E5"}}>
        <div className='col-12 mb-4 py-3 m-lg-0 col-md-6 col-lg-6 col-xl-6 d-flex gap-4 flex-md-column flex-lg-column align-items-center'>
          <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
              <div className="card h-100 radius-12 text-center">
                  <div className="card-body p-24">
                      <div className="w-64-px h-64-px d-inline-flex align-items-center justify-content-center bg-gradient-primary text-primary-600 mb-16 radius-12">
                          <i className="bi bi-award-fill h5"></i> 
                      </div>
                      <h6 className="mb-8">Développement & Réseaux</h6>
                      <p className="card-text mb-8 text-secondary-light">Mettre votre talent en développement et/ou en réseau oeuvre pour la résolution de problème.</p>
                  </div>
              </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column text-white text-start text-wrap'>
          <h2 className='display-4 fw-bold text-white'>Relevez des défis passionnants</h2>
          <p className='fs-5 mb-4'>Participez à des défis techniques stimulants conçus pour tester vos compétences en développement ou réseaux, en résolution de problèmes et en innovation.</p>
          <div className='d-flex align-items-center mt-3'>
          </div>
        </div>
      </section>

            {/* section d'activité  */}

        <section className='row d-flex flex-column flex-md-row flex-lg-row  text-black p-5  rounded-3  '>
         <div>
              {/* style={{color: " #22B8E5"}} */}
              <h3 className="underline-animate text-dark fw-bold"> Les Activités </h3>
 
         </div>
        <div className="container py-5">
          <div className="row text-start g-4">
            <div className="col-md-4 img-hover ">
              <div className="feature-icon m-9">
                  <i className="bi bi-lightbulb"></i>            
              </div>
              <h4 className="fw-bold fs-7 m-6">Première Epreuve </h4>
              <p>Chaque Niveau : Licence 1 (Genie Informatique, Miage et RIT) et  Licence 2 (Genie Informatique, Miage et RIT) vont être soumis à un quiz de 30 min, à la fin de ce quiz ceux qui auront le plus de points seront retenus pour la phase de pratique </p>
            </div>

            <div className="col-md-4 img-hover ">
              <div className="feature-icon m-9">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="fw-bold">Épreuve Finale </h4>
              <p>Dans cette partie, les équipes sélectionnées vont aller développer leur projet sur un thème sur une semaine et bien défini qui leur sera communiqué  et dans cette même partie, les équipes vont présenter leurs projets devant les membres du jury tout en expliquant leur projet</p>
            </div>

            <div className="col-md-4 img-hover">
              <div className="feature-icon m-9">
                <i className="bi  bi-trophy"></i>
              </div>
              <h4 className="fw-bold">Lauréats </h4>
              <p>Dans cette phase, est la phase de remise des prix des équipes victorieuses où toutes les équipes ayant été inscrites dès le début de la première phase seront là. Cette phase sera couronnée par une cérémonie où certains docteurs, du conseil du REDIS et les membres du jury vont prendre place pour nous donner quelques conseils et annoncer les liqueurs de cette hackaton</p>
            </div>
          </div>
        </div>
        
      </section>

      <section class="py-5 bg-light mb-3">
          <div class="container">
              <h2 class="text-center mb-5 fw-bold underline-animate-dark">Objectifs du Hackathon</h2>
              
              <div class="row g-4">
                  {/* <!-- Innovation --> */}
                  <div class="col-md-6 col-lg-3">
                      <div class="card h-100 border-0 shadow-sm bg-info bg-opacity-10">
                          <div class="card-body text-center p-4">
                              <div class="bg-info bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "80px", height: "80px"}}>
                                  <i class="bi bi-lightbulb text-info fs-2"></i>
                              </div>
                              <h5 class="card-title fw-bold">Innovation</h5>
                              <p class="card-text">Stimuler la créativité et l'innovation des étudiants en informatique</p>
                          </div>
                      </div>
                  </div>
                  
                  {/* <!-- Compétences techniques --> */}
                  <div class="col-md-6 col-lg-3">
                      <div class="card h-100 border-0 shadow-sm bg-info bg-opacity-10">
                          <div class="card-body text-center p-4">
                              <div class="bg-info bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "80px", height: "80px"}}>
                                  <i class="bi bi-tools text-info fs-2"></i>
                              </div>
                              <h5 class="card-title fw-bold">Compétences techniques</h5>
                              <p class="card-text">Développer des compétences en réseau et développement logiciel</p>
                          </div>
                      </div>
                  </div>
                  
                  {/* <!-- Travail d'équipe --> */}
                  <div class="col-md-6 col-lg-3">
                      <div class="card h-100 border-0 shadow-sm bg-info bg-opacity-10">
                          <div class="card-body text-center p-4">
                              <div class="bg-info bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "80px", height: "80px"}}>
                                  <i class="bi bi-people text-info fs-2"></i>
                              </div>
                              <h5 class="card-title fw-bold">Travail d'équipe</h5>
                              <p class="card-text">Favoriser la collaboration et la résolution de problèmes concrets</p>
                          </div>
                      </div>
                  </div>
                  
                  {/* <!-- Défis réels --> */}
                  <div class="col-md-6 col-lg-3">
                      <div class="card h-100 border-0 shadow-sm bg-info bg-opacity-10">
                          <div class="card-body text-center p-4">
                              <div class="bg-info bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "80px", height: "80px"}}>
                                  <i class="bi bi-flag text-info fs-2"></i>
                              </div>
                              <h5 class="card-title fw-bold">Défis réels</h5>
                              <p class="card-text">Préparer les étudiants à relever des défis techniques professionnels</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

                     {/* section de calendrier et de lieu  */}

    <h2 className='underline-animate fw-bold' > Calendrier et Lieu </h2>

    <section class="d-flex justify-content-center align-items-center py-5">
      <div class="container text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-center">

          <div class="col">
            <div class="card h-100 radius-12 text-center shadow-sm">
              <div class="card-body p-4">
                <div class="mb-5 mt-4 pt-4">
                  <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                    <div className='feature-icon'>
                            <i class="bi bi-award-fill h5"></i>
                    </div>
                  </div>
                  <h6 class="mb-0">Licence 1</h6>
                </div>

                <div class="mt-5 pt-5">
                  <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                    <div className='feature-icon'>
                    <i class="bi bi-award-fill h5"></i>
                  </div>
                  </div>
                  <h6 class="mb-0">Licence 2</h6>
                </div>
                <div class="mt-5 pt-5">
                  <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                    <div className='feature-icon'>
                    <i class="bi bi-award-fill h5"></i>
                  </div>
                  </div>
                  <h6 class="mb-0">Licence 3</h6>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 radius-12 text-center shadow-sm">
              <div class="card-body p-4">
                <div class="">
                  <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                    <div className='feature-icon'>
                    <i class="bi bi-calendar h5"></i>
                  </div>
                  </div>
                  <h6 class="mb-2">Selection (Phase de Quizz en ligne)</h6>
                  <p class="card-text text-secondary mb-2">La phase de sélection marque le premier défi de notre hackathon. Les participants devront démontrer leurs connaissances, leur logique et leur capacité d’analyse à travers un quiz technique conçu pour évaluer leur compréhension des fondamentaux en programmation, innovation et résolution de problèmes.</p>
                 <p class="card-text text-secondary">Ce quiz permettra d’identifier les profils les plus prometteurs, capables d’aborder les défis du hackathon avec créativité et rigueur. Les meilleurs scores accéderont à la phase de développement, où leurs compétences pratiques seront mises à l’épreuve. </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100 radius-12 text-center shadow-sm">
              <div class="card-body p-4">
                <div class="">
                  <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                    <div className='feature-icon'>
                    <i class="bi bi-code-slash h5"></i>
                  </div>
                  </div>
                  <h6 class="mb-2">Développement & Réseaux (Phase d'Épreuve)</h6>
                          <h6 class="mb-2"> <i class="bi bi-geo-alt"></i> chez chacun </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 radius-12 text-center shadow-sm">
              <div class="card-body p-4">
                <div class="">
                  <div class="w-64-px h-64-px d-inline-flex align-items-center justify-content-center  mb-3 radius-12">
                    <div className='feature-icon'>
                    <i class="bi bi-award"></i>
                  </div>
                  </div>
                  <h6 class="mb-2"> laureat </h6>
                  <h6 class="mb-2"> <i class="bi bi-geo-alt"></i> Bonoumin amphi 1</h6>
                  {/* <p class="card-text text-secondary"> <i class="bi bi-calendar"></i>  Vendredi 26 Novembre 2025</p> */}
                  <p class="card-text text-secondary"> nous allons dans en ce moment présenter les differents vinqueurs des different niveau et leurs remettre leur prix ce moment sera cloturer par l'intervention des membres du juré et des différents partenaires et anciens de IUA REDIS  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  {/* <section id="themes" class="py-5">
      <div class="container py-5">
          <h2 class="underline-animate underline-dark display-5 text-dark fw-bold text-center mb-5">Exemple des Thèmes des Hackatons</h2>
          <div class="row g-4">
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-globe text-primary fs-2"></i>
                          </div>
                          <h4 class="card-title">Développement Durable</h4>
                          <p class="card-text">Créez des solutions technologiques pour relever les défis environnementaux et promouvoir un avenir durable.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-heart-pulse text-success fs-2"></i>
                          </div>
                          <h4 class="card-title">Santé & Bien-être</h4>
                          <p class="card-text">Innovations dans les soins de santé, le bien-être mental et l'accessibilité médicale pour tous.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-shield-check text-info fs-2"></i>
                          </div>
                          <h4 class="card-title">Sécurité & Vie Privée</h4>
                          <p class="card-text">Développez des solutions pour protéger les données et la vie privée dans un monde numérique.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-robot text-warning fs-2"></i>
                          </div>
                          <h4 class="card-title">IA & Machine Learning</h4>
                          <p class="card-text">Exploitez l'intelligence artificielle pour résoudre des problèmes complexes et automatiser des processus.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-cash-coin text-danger fs-2"></i>
                          </div>
                          <h4 class="card-title">FinTech & Inclusion</h4>
                          <p class="card-text">Solutions financières innovantes pour améliorer l'accès aux services bancaires et financiers.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-0 shadow-sm">
                      <div class="card-body text-center p-4">
                          <div class="bg-secondary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                              <i class="bi bi-house text-secondary fs-2"></i>
                          </div>
                          <h4 class="card-title">Villes Intelligentes</h4>
                          <p class="card-text">Technologies pour des villes plus efficaces, durables et agréables à vivre.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section> */}

 <section>
        
      {/* <h2 className=' underline-animate my-6 py-6 fs-7' style={{color: " #22B8E5"}}> Nos Partenaires</h2> */}
      {/* <div className="container text-center py-5">
  <div className="row">
    <div className="col-lg-4">
      <img
        src={imge}
        className="rounded-circle border border-2 border-transparent"
        alt="photo"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <h2 className="fw-bold fs-4 my-2">le J Steplai</h2>
      <p className="fs-5">
        Enseignant chercheur à l’Université ESATIC, expert en Java, Node.js et Viano.
      </p>
     <button
        className="btn btn-custom px-4 border border-2 badge" style={{ backgroundColor: "#22B8E5", borderColor: "#22B8E5" }}>
        Vvoir les details »
      </button>    
       </div>

    <div className="col-lg-4">
      <img
        src={img}
        className="rounded-circle border border-2 border-transparent"
        alt="photo"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <h2 className="fw-bold fs-4 my-2">ELIE LEROI</h2>
      <p className="fs-5">
        Enseignant chercheur à l’Université ESATIC, expert en Java, Node.js et Viano.
      </p>
    <button
        className="btn btn-custom px-4 border border-2 badge" style={{ backgroundColor: "#22B8E5", borderColor: "#22B8E5" }}>
        Vvoir les details »
    </button>   
</div>

    <div className="col-lg-4">
      <img
        src={image}
        className="rounded-circle border border-2 border-transparent"
        alt="photo"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <h2 className="fw-bold fs-4 my-2">LE ROI </h2>
      <p className="fs-5">
        Enseignant chercheur à l’Université ESATIC, expert en Java, Node.js et Viano.
      </p>
    <button
        className="btn btn-custom px-4 border border-2 badge" style={{ backgroundColor: "#22B8E5", borderColor: "#22B8E5" }}>
        Vvoir les details »
    </button>     </div>
  </div>
</div>  */}

 </section>
<section id="faq" class="py-5 bg-light">
  <div class="container">
    <h2 class="display-6 fw-bold text-center mb-4 mb-md-5">Questions Fréquentes</h2>
    
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">

        <div id="faqAccordion">

          {/* <!-- Bouton 1 --> */}
          <div class="mb-3 text-center">
            <button class="btn btn-outline-primary w-100 text-start fw-semibold py-3 px-3"
              type="button" data-bs-toggle="collapse" data-bs-target="#faq1"
              aria-expanded="true" aria-controls="faq1">
              Qui peut participer à HackaRedis ?
            </button>
          </div>

          {/* <!-- Contenu 1 --> */}
          <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div class="accordion-body bg-white border rounded-3 shadow-sm p-3">
              HackaRedis est ouvert à tous les passionnés de technologie : développeurs, designers, entrepreneurs, étudiants.
              Les équipes doivent être composées de 3 membres. Aucune limite d'âge ni de niveau d'expérience n'est imposée.
            </div>
          </div>

          {/* <!-- Bouton 2 --> */}
          <div class="mb-3 text-center">
            <button class="btn btn-outline-primary w-100 text-start fw-semibold py-3 px-3 collapsed"
              type="button" data-bs-toggle="collapse" data-bs-target="#faq2"
              aria-expanded="false" aria-controls="faq2">
              Dois-je avoir une équipe pour participer ?
            </button>
          </div>

          {/* <!-- Contenu 2 --> */}
          <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body bg-white border rounded-3 shadow-sm p-3">
              Oui, vous ne pouvez pas vous inscrire en tant qu'individu.
            </div>
          </div>

          {/* <!-- Bouton 3 --> */}
          <div class="mb-3 text-center">
            <button class="btn btn-outline-primary w-100 text-start fw-semibold py-3 px-3 collapsed"
              type="button" data-bs-toggle="collapse" data-bs-target="#faq3"
              aria-expanded="false" aria-controls="faq3">
              Quel est le coût de participation ?
            </button>
          </div>

          {/* <!-- Contenu 3 --> */}
          <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body bg-white border rounded-3 shadow-sm p-3">
              La participation à HackaRedis est entièrement gratuite.
            </div>
          </div>

          {/* <!-- Bouton 4 --> */}
          <div class="mb-3 text-center">
            <button class="btn btn-outline-primary w-100 text-start fw-semibold py-3 px-3 collapsed"
              type="button" data-bs-toggle="collapse" data-bs-target="#faq4"
              aria-expanded="false" aria-controls="faq4">
              Que dois-je apporter ?
            </button>
          </div>
{/* 
          <!-- Contenu 4 --> */}
          <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body bg-white border rounded-3 shadow-sm p-3">
              Apportez votre ordinateur portable, son chargeur, et tout autre matériel dont vous pourriez avoir besoin.
            </div>
          </div>

          {/* <!-- Bouton 5 --> */}
          <div class="mb-3 text-center">
            <button class="btn btn-outline-primary w-100 text-start fw-semibold py-3 px-3 collapsed"
              type="button" data-bs-toggle="collapse" data-bs-target="#faq5"
              aria-expanded="false" aria-controls="faq5">
              Puis-je commencer à travailler sur mon projet avant l'événement ?
            </button>
          </div>

          {/* <!-- Contenu 5 --> */}
          <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body bg-white border rounded-3 shadow-sm p-3">
              Oui, vous pouvez réfléchir à des idées et concevoir votre projet à l'avance. Et c'est ce qui est recommandé.
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>

<footer
      className="text-white pt-5 pb-3 mt-5 row d-flex"
      style={{ backgroundColor: '#22B8E5' }}
    >
      <Container>
        <Row className="align-items-start text-center text-md-start">
          {/* Logo et description */}
          <Col md={4} className="mt-4">
            <h5 className="fw-bold mb-4 ps-3">Liens utiles</h5>
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <img
                src={logo}
                alt="Logo"
                className="rounded-circle mb-3 border border"
                style={{ width: '80px', height: '80px', objectFit: 'contain' }}
              />
              <p className="small mb-0">
Prêt à relever le défi et montrer ton talent ? Viens vivre une expérience unique dans le développement et les rencontres professionnelles !              </p>
            </div>
          </Col>

          {/* Liens rapides */}
        <Col md={4} className="mt-4">
          <h5 className="fw-bold mb-4 ps-2 text-center">Liens utiles</h5>
            <ul className=" mb-4 ps-3 text-center  ">
              <li><a href="#home" className="text-white underline-animate-dark-a text-decoration-none  ">Accueil</a></li>
              <li><a href="#about" className="text-white underline-animate-dark-a text-decoration-none">À propos</a></li>
              <li><a href="#events" className="text-white underline-animate-dark-a text-decoration-none">Événements</a></li>
              <li><a href="#contact" className="text-white underline-animate-dark-a text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Réseaux sociaux */}
          <Col md={4} className="text-center ">
            <h5 className="fw-bold mb-3">Suivez-nous</h5>
            <div className="d-flex justify-content-center  gap-3">
              <a href="#" className="text-white fs-4"><FaTwitter /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        {/* Ligne de séparation */}
        <hr className="border-light my-4" />

        {/* Copyright */}
        <Row>
          <Col className="text-center small">
            <p class="fs-6">
            Conçu avec amour par &nbsp;
            <a href="https://hackaredis-dev.vercel.app/" class="underline-animate-dark-a fs-5 text-white fw-bold">Equipe technique</a>.
            </p>
          </Col>
          <Col className="text-center small">
            &copy; {new Date().getFullYear()} HackaRedis. Tous droits réservés.
          </Col>
        </Row>
      </Container>
    </footer>
    
 
 

    </div>
     
  );
}

export default App;  