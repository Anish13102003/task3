import uncle from "./assets/images/uncle.jpg"
import Bheema from "./assets/images/bima.webp"
import walter from "./assets/images/walter.jpeg"
import juli from "./assets/images/juli.webp"
import jackie from "./assets/images/jackjpg.jpg"
import cap from "./assets/images/captainjpg.jpg"





const Cards = () => {
  const title = [
    {Name:"jackie", Role:"Hero", Profession:"archaeologist", img:jackie},
    {Name:"juli", Role:"cousin", Profession:"child", img:juli},
    {Name:"Uncle", Role:"Magician", Profession:"retal shop", img:uncle},
    {Name:"Bheema", Role:"Villain", Profession:"servant", img:Bheema},
    {Name:"walter", Role:"Villain", Profession:"robbery", img:walter},
    {Name:"captain black", Role:"police", Profession:"detective", img:cap},
  //  {Name:"captain black", Role:"police", Profession:"detective", img:"./assets/images/bima.webp"},

  ];


   return (
    <section style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {title.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              width: "220px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <img
              src={item.img}
              alt={item.Name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />

            <p><strong>Name:</strong> {item.Name}</p>
            <p><strong>Role:</strong> {item.Role}</p>
            <p><strong>Profession:</strong> {item.Profession}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;