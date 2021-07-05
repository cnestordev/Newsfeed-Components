/* This is the data we will be using to create our articles */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Lambda Web 2020',
    date: 'July 11th, 2020',
    firstParagraph: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure `,

    secondParagraph: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure`,

    thirdParagraph: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure`
  },
  {
    title: 'More random stuff here',
    date: 'Jan 11st, 2025',
    firstParagraph: `Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.`,

    secondParagraph: `Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.`,

    thirdParagraph: `Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.`
  },
  {
    title: "Last But Not Least",
    date: 'June 15th 3050',
    firstParagraph: `Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.`,

    secondParagraph: `Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.`,

    thirdParagraph: `Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.
    Sed augue lacus viverra vitae congue eu consequat ac. Sed vulputate odio ut enim blandit.`
  }
];

const articlesSection = document.querySelector('.articles')
//Step 1: Write a component called 'articleMaker' to create an article. You want your component to return markup like the template below:
function articleMaker(articleOjb) {
  const articleBody = document.createElement('div')
  const articleTitle = document.createElement('h2')
  const articleDate = document.createElement('p')
  const firstParagraph = document.createElement('p')
  const secondParagraph = document.createElement('p')
  const thirdParagraph = document.createElement('p')
  const expandButton = document.createElement('span')
  const readButton = document.createElement('button')

  articleTitle.textContent = articleOjb.title
  articleDate.textContent = articleOjb.date
  firstParagraph.textContent = articleOjb.firstParagraph
  secondParagraph.textContent = articleOjb.secondParagraph
  thirdParagraph.textContent = articleOjb.thirdParagraph
  expandButton.textContent = "Click to Expand"
  readButton.textContent = "Mark as Read"

  articleBody.classList.add('article')
  articleDate.classList.add('date')
  expandButton.classList.add('expandButton')
  readButton.classList.add('article-button')
  readButton.setAttribute('id', "hideButton")

  articleBody.appendChild(articleTitle)
  articleBody.appendChild(articleDate)
  articleBody.appendChild(firstParagraph)
  articleBody.appendChild(secondParagraph)
  articleBody.appendChild(thirdParagraph)
  articleBody.appendChild(expandButton)
  articleBody.appendChild(readButton)

  expandButton.addEventListener('click', function () {
    articleBody.classList.toggle('article-open')
    this.classList.toggle('top')
    if (this.textContent.toLocaleLowerCase() === "click to expand") {
      this.textContent = "Click to Close"
    } else {
      this.textContent = "Click to Expand"
    }
  })

  readButton.addEventListener('click', function (e) {
    this.parentNode.style.display = "none"
  })

  return articleBody
}

data.forEach(article => articlesSection.appendChild(articleMaker(article)))
