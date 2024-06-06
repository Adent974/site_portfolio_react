import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import Header from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [Supprimer, setSupprimer] = useState(false);
    const toRotate = ["étudiant à Epitech", "developpeur en C", "en recherche de stage"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const time = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let Text = toRotate[i];
        let newText = Supprimer ? Text.substring(0, text.length - 1) : Text.substring(0, text.length + 1);

        setText(newText);
        if (Supprimer) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!Supprimer && newText === Text) {
            setSupprimer(true);
            setDelta(time);
        } else if (Supprimer && newText === ''){
            setSupprimer(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenue sur mon Portfolio</span>
                        <h1>{'Bonjour je suis Adam Dijoux '}<span className="txt-rotate">{text}</span></h1>
                        <p>📚 Actuellement en première année à Epitech. Passionné par l'informatique et toujours à la recherche de nouveaux défis à relever 💻.
                            Depuis l'enfance, je suis fasciné par l'informatique et j'ai toujours cherché à comprendre comment les choses fonctionnent. Cette curiosité m'a conduit à développer des compétences solides dans plusieurs langages de programmation et technologies.
                            🎓 J'ai obtenu un baccalauréat général mention très bien avec des options NSI, Mathématiques et Sciences de l'Ingénieur, suivi d'une année de licence informatique à l'Université de Poitiers avant de rejoindre Epitech.</p>
                        <button onClick={() => console.log('connect ')}>Connectons nous !<ArrowRightCircle size={25}/></button>    
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={Header} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}