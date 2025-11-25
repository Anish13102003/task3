import uncle from "../assets/images/uncle.jpg";
import Bheema from "../assets/images/bima.webp";
import walter from "../assets/images/walter.jpeg";
import juli from "../assets/images/juli.webp";
import jackie from "../assets/images/jackjpg.jpg";
import cap from "../assets/images/captainjpg.jpg";

const Cards = () => {
  const characters = [
    { name: "Jackie", role: "Hero", job: "Archaeologist", img: jackie },
    { name: "Juli", role: "Cousin", job: "Child", img: juli },
    { name: "Uncle", role: "Magician", job: "Artifact Expert", img: uncle },
    { name: "Bheema", role: "Villain", job: "Evil Warrior", img: Bheema },
    { name: "Walter", role: "Villain", job: "Robber", img: walter },
    { name: "Captain Black", role: "Police", job: "Detective", img: cap },
  ];

  return (
    <div id="characters" className="cards-container">
      {characters.map((chr, i) => (
        <div className="card" key={i}>
          <img src={chr.img} alt={chr.name} />
          <h2>{chr.name}</h2>
          <p><strong>Role:</strong> {chr.role}</p>
          <p><strong>Profession:</strong> {chr.job}</p>
          <button className="card-btn">Show</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
