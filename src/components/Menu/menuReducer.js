const INITIAL_STATE = {
  menuItems: [
    {
      label: 'All Widgets',
      url: '/',
      subMenuLinks: []
    },
    {
      label: 'Accordion',
      url: '/accordion',
      subMenuLinks: [
        {
          label: 'Accordion Item 1',
          url: '/accordion'
        },
        {
          label: 'Accordion Item 2',
          url: '/accordion'
        },
        {
          label: 'Accordion Item 3',
          url: '/accordion'
        },
        {
          label: 'Accordion Item 4',
          url: '/accordion'
        },
        {
          label: 'Accordion Item 5',
          url: '/accordion'
        }
      ]
    },
    {
      label: 'Inline Alert',
      url: '/inline-alert',
      subMenuLinks: []
    },
    {
      label: 'Menu',
      url: '/menu',
      subMenuLinks: []
    },
    {
      label: 'Modal',
      url: '/modal',
      subMenuLinks: []
    },
    {
      label: 'Styled Form',
      url: '/styled-form',
      subMenuLinks: []
    }
  ],
  menuIsOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { ...state, menuIsOpen: true };
    case 'CLOSE_MENU':
      return { ...state, menuIsOpen: false };
    default:
      return state;
  }
};
