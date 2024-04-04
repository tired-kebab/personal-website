/* eslint-disable react/prop-types */
const Index = ({ setIsModal }) => {
  const handleCloseModal = () => {
    setIsModal(false);
  };
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <input type="text" />
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Index;
