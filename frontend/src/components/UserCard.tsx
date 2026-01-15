import '../App.css';

const Card = ({ name, image, location, type }) => (
  <div className="relative w-[300px] h-40 bg-gray-100 shadow-md flex items-center justify-center rounded-xl mx-auto">
    {image ? (
      <img
        src={image}
        alt={name}
        className="absolute top-4 left-4 w-12 h-12 rounded-full object-cover border-2 border-blue-900"
      />
    ) : (
      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gray-300 border-2 border-blue-900"></div>
    )}

    <span className="absolute top-4 left-20 font-bold text-[15px]">{name} :</span>
    <ul className="absolute top-10 left-24 list-disc pr-2">
      <li className="text-[14px] font-normal mt-0">{location}</li>
      <li className="text-[14px] font-normal mt-0">{type}</li>
    </ul>

    <button className="usercard absolute bottom-4 z-50">Rejoindre</button>
  </div>
);

function UserCard() {
  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px] gap-y-8">

        <Card name="Marius" image="marius.png" location="17h45 Basic Fit, Lille" type="Séances dos" />
        <Card name="Lois" image="lois.jpg" location="17h45 Basic Fit, Lille" type="Séances dos" />
        <Card name="Oles" location="17h45 Basic Fit, Lille" type="Séances dos" />
        <Card name="Oles" location="17h55 Basic Fit, Lille" type="Séances dos" />

        <Card name="Oles" location="17h45 Basic Fit, Lille" type="Séances dos" />
        <Card name="Oles" location="17h45 Basic Fit, Lille" type="Séances dos" />
        <Card name="Oles" location="17h45 Basic Fit, Lille, Tanneurs" type="Séances dos" />
        <Card name="Oles" location="17h45 Basic Fit, Lille" type="Séances dos" />
      </div>
    </div>
  );
}

export default UserCard;
