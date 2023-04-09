const PersonsInfo = ({ movie }) => {
  const { persons } = movie || {};
  return (
    <>
      
      {persons.slice(0, 5).map(({ id, name, photo }) => (
        <span className="person" key={id}>
          <img src={photo} width={100} placeholder="blur" />
          <h4>{name}</h4>
        </span>
      ))}
    </>
  );
};

export default PersonsInfo;
