import React from 'react';

const FoodDetailsPage = ({ match }) => {
  return (
    <div>
      <h1>פרטי מזון</h1>
      {/* הצגת פרטי מזון עבור id = {match.params.id} */}
    </div>
  );
};

export default FoodDetailsPage;
