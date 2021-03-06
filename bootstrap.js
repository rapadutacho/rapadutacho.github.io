/**
 * application: rapadutacho
 *
 * powered by Moreira in 2020-03-19
 */
'use strict';

//@ts-ignore
define(['vue', 'h-vue'], (Vue, { H }) => {

  const
    renderImage = h => h('img', {
      style: {
        'margin-left': 'auto',
        'margin-right': 'auto',
        'max-width': `${window.innerWidth < 721 ? 25 : 18 }%`
      },
      attrs: {
        src: 'rapadutacho.png',
        alt: 'logomarca'
      }
    }),

    renderParagraph = (h, o, ...a) => h('p', {
      style: Object.assign({ 'font-family': '\'Pangram black\', sans-serif' }, o)
    }, ...a),

    renderCaption = h => h(
      'figcaption',
      { style: 'display: grid; text-align: center; letter-spacing: .1em' },
      renderParagraph(h, {}, 'RAPA DU'),
      renderParagraph(h,
        {
          'letter-spacing': '.4em',
          'font-size-adjust': '.4'
        },
        'TACH',
        h('span', { style: 'letter-spacing: 0' }, 'O'),
        h('sup', {
          style: 'letter-spacing: 0; font-family: \'Abril Fatface\', cursive; font-style: normal',
          domProps: { innerHTML: '&reg;' }
        })
      ),
      renderParagraph(h, {
        'font-family': '\'Abril Fatface\', cursive',
        'letter-spacing': '0em',
        'font-size': '.5em'
      }, 'sorveteria & confeitaria')
    ),

    renderFigure = h => h(
      'figure',
      { style: 'display: grid' },
      renderImage(h),
      renderCaption(h)
    ),

    renderContactImage = (h, src, href) => h('a', { style: 'margin-left: auto; margin-right: auto', attrs: { href } }, h('img', {
      style: 'max-size: 25%; margin-left: auto; margin-right: auto',
      attrs: { src }
    })),

    renderContactCaption = (h, ...a) => h(
      'figcaption', 
      { style: 'font-family: \'Be Vietnam\', sans-serif; text-align: center'},
      ...a.map(p => h('p', p))
    ),

    renderInstagram = (h, style) => h(
      'figure',
      { style },
      // renderContactCaption(h, 'Nos siga nas', 'redes sociais'),
      renderContactCaption(h, 'Nos siga nas redes sociais'),
      renderContactImage(h, 'instagram.png', 'https://instagram.com/rapadutacho?igshid=1wi23ynuej5gt')
    ),

    renderWhatsapp = (h, style) => h(
      'figure',
      { style },
      // renderContactCaption(h, 'Faça seu pedido', 'através do nosso', 'whatsapp'),
      renderContactCaption(h, 'Faça seu pedido através do nosso whatsapp'),
      renderContactImage(h, 'whatsapp.png', 'https://api.whatsapp.com/send?phone=5562985033913')
    ),

    renderContacts = h => {

      const styleContact = {
        display: 'grid',
        'font-size': '.4em',
        'row-gap': '1em',
        'text-align': 'center',
        'margin-left': '1em',
        'margin-right': '1em'
      };
      
      return h(
        'div',
        { 
          style: {
            display: 'grid',
            'grid-template-columns': '1fr 1fr',
            'margin-top': '1em',
            'margin-left': '1em',
            'margin-right': '1em' 
          }
        },
        renderInstagram(h, styleContact),
        renderWhatsapp(h, styleContact)
      );
    },

    render = H(function (h) {
      return h(
        'main', 
        { style: 
          {
            display: 'grid',
            'font-size': `${window.innerWidth < 721 ? '3' : '4' }rem`,
            'padding-top': `2rem`
          }
        }, 
        renderFigure(h), 
        renderContacts(h))
    });

console.log(window.innerWidth);    
  new Vue({ render }).$mount('app');
});
