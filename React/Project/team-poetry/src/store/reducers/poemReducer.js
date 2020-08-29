const initState = {
  poems: [
    {
      id: 1,
      title: "The Falling Of The Leaves",
      content: `AUTUMN is over the long leaves that love us,
      And over the mice in the barley sheaves;
      Yellow the leaves of the rowan above us,
      And yellow the wet wild-strawberry leaves.
      The hour of the waning of love has beset us,
      And weary and worn are our sad souls now;
      Let us patt, ere the season of passion forget us,
      With a kiss and a tear on thy drooping brow.`,
      postedBy:"Kritika Baral",
      dateTime:"25th August, 6:00 pm",
    },
    {
        id: 2,
        title: "To An Isle In The Water",
        content: `SHY one, Shy one,
        Shy one of my heart,
        She moves in the firelight
        Pensively apart.
        She carries in the dishes,
        And lays them in a row.
        To an isle in the water
        With her would I go.
        
        With catries in the candles,
        And lights the curtained room,
        Shy in the doorway
        And shy in the gloom;
        And shy as a rabbit,
        Helpful and shy.
        To an isle in the water
        With her would I fly`,
        postedBy:"Kirtee Maharjan",
        dateTime:"30th September, 9:00 am",
      },
      {
        id: 3,
        title: "The Pity Of Love",
        content: `A PITY beyond all telling
        Is hid in the heart of love:
        The folk who are buying and selling,
        The clouds on their journey above,
        The cold wet winds ever blowing,
        And the shadowy hazel grove
        Where mouse-grey waters are flowing,
        Threaten the head that I love`,
        postedBy:"Neeta Sapkota",
        dateTime:"3rd November, 12:00 pm",
      },
  ],
};

const poemReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_POEM':
      console.log('created poem, action.poem')
  }
  
  return state;
};

export default poemReducer;
