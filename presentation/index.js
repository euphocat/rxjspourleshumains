// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import TimeDifference from "../assets/code.example6";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  humans: require('../assets/corporate-yoga-group2.jpg'),
  biscotte: require('../assets/biscotte.jpg'),
  back: require('../assets/back.jpg'),
  katty: require('../assets/katty.jpg'),
  ben: require('../assets/ben.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "#967d4d",
  secondary: "white",
  tertiary: "white",
  quartenary: "white"
});

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgDarken={0.75} bgImage={images.humans.replace("/", "")}>
            <Heading textSize="4em" caps lineHeight={1} textColor="primary">
              RxJS
            </Heading>
            <Heading size={1} fit caps>
              Pour les humains
            </Heading>
            <Heading size={5} textColor="primary">
              Nicolas BAPTISTE
            </Heading>
            <Heading size={6} textColor="secondary">
              Twitter <Link textColor="secondary" href="https://twitter.com/euphocat/">
              <S type="underline">@euphocat</S>
            </Link>
            </Heading>
            <Text textColor="secondary" textSize=".6em" margin="1em 0">Source image:
              http://www.moonfloweryoga.com/corporate-yoga</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black"
                 notes="You can even put notes on your slide. How awesome is that?">

            <Heading size={2} caps fit textFont="primary">
              C'est quoi encore ce truc ?
            </Heading>

            <Appear><Heading size={2} caps fit textColor="primary" textFont="primary">
              Encore une autre librairie JS ???
            </Heading></Appear>

            <Appear><Heading size={2} caps fit textFont="primary">
              A quoi ça va me servir ?
            </Heading></Appear>

            <Appear><Heading size={2} caps fit textColor="primary" textFont="primary">
              Comment en est-on arrivé là ?
            </Heading></Appear>

          </Slide>

          <Slide transition={["slide"]} bgImage={images.back.replace("/", "")} bgDarken={0.75}
                 notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Remontons le temps
            </Heading>
            <Heading size={2} caps fit textFont="primary">
              L'histoire du code asynchrone en JS
            </Heading>
            <Text textColor="secondary" textSize=".6em" margin="1em 0">Source image:
              Universal</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary"
                 notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} fit textFont="primary">
              xhr, XMLHttpRequest, AJAX
            </Heading>
            <CodePane lang="javascript"
                      source={require("raw!../assets/code.example2.code")}
                      textSize=".8em"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="black"
                 notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} fit textFont="primary">
              jQuery $.ajax, $.get, $.post, $.etc...
            </Heading>
            <CodePane lang="javascript"
                      source={require("raw!../assets/code.example3.code")}
                      textSize="1em"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="black"
                 notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps textFont="primary">
              Callback HELL
            </Heading>
            <CodePane lang="javascript"
                      source={require("raw!../assets/code.example4.code")}/>
          </Slide>

          <Slide transition={["slide"]} bgDarken={0.75} bgImage={images.biscotte.replace("/", "")} bgColor="black">
            <Appear><Heading caps textSize="2em" textFont="primary">
              Les promesses
            </Heading>
            </Appear>
            <Appear>
              <CodePane lang="javascript"
                        source={require("raw!../assets/code.example5.code")}
                        textSize=".5em"/>
            </Appear>
            <Text textColor="secondary" textSize=".6em" margin="1em 0">Source image:
              Gaumont Columbia Tristar Films</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} fit caps textFont="primary">
              Petit exercice (mental)
            </Heading>
            <Appear>
              <Heading size={2} fit caps textColor="primary" textFont="primary">
                Un compteur de clics
              </Heading>
            </Appear>
            <Appear>
              <Heading size={2} fit caps textFont="primary">
                Facile !
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} fit caps textFont="primary">
              Autre petit exercice
            </Heading>
            <Appear>
              <Heading size={2} fit caps textColor="black" textFont="primary">
                Calculer le temps entre 2 clics
              </Heading>
            </Appear>
            <Appear>
              <Heading size={2} fit caps textFont="primary">
                On fait moins les malins !
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading caps textSize="2em" textFont="primary">
              La solution avec RxJS
              <TimeDifference textColor="primary"/>
            </Heading>

            <Appear fid="1">
              <CodePane lang="javascript"
                        source={require("raw!../assets/code.example6.rxjs")}
                        textSize=".9em"/>
            </Appear>
          </Slide>

          <Slide>

            <Heading margin="0 0 .5em" fit caps>Représentation d'un flux</Heading>

            <Heading margin="0 0 .5em" fit caps>
              <Code>
                --a---b-c---X---d---|->
              </Code>
            </Heading>

            <Text><S type="bold">---></S> représente le temps</Text>
            <Text textColor="secondary"><S type="bold">a, b, c, d</S> sont des valeurs</Text>
            <Text><S type="bold">X</S> est une erreur</Text>
            <Text textColor="secondary"><S type="bold">|</S> représente signal 'completed'</Text>

          </Slide>

          <Slide>
            <Heading fit caps margin="0 0 .5em">Observables &amp; observers</Heading>
            <List>
              <ListItem size={4} textAlign="left" margin="0 0 1em">Un flux est appelé Observable</ListItem>
              <ListItem size={4} textAlign="left">La "réaction" à ce flux se fait avec un Observer</ListItem>
            </List>
          </Slide>

          <Slide bgColor="black">

            <Heading fit caps>Création d'observables</Heading>
            <Heading fit caps>A partir d'éléments existants</Heading>
            <List>
              <ListItem textColor="primary">De tableaux, de Sets, de Maps, de Generators via
                Rx.Observable.from()</ListItem>
              <ListItem>D'événements avec Rx.Observable.fromEvent()</ListItem>
              <ListItem textColor="primary">De callbacks avec Rx.Observable.fromCallback()</ListItem>
              <ListItem>De promesses avec Rx.Observable.fromPromise();</ListItem>
            </List>

          </Slide>

          <Slide>
            <Heading fit caps>Mais vous pouvez aussi créer les votres</Heading>
            <List>
              <ListItem>Avec Rx.Observable.create()</ListItem>
              <ListItem>Avec Rx.Subject() qui est à la fois un observerable et un observer (sorte de
                proxy)</ListItem>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Layout>
              <Fill><Image src={images.ben.replace("/", "")} width="80%"/></Fill>
              <Fill>
                <BlockQuote>
                  <Quote>RxJS is Lodash for events</Quote>
                  <Cite>@BenLesh - RxJS 5 Project Lead</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
            <Text textColor="secondary" textSize=".6em" margin="1em 0">Source image:
              twitter.com</Text>
          </Slide>

          <Slide>
            <Heading fit caps margin="0 0 .5em">Quelques fonctions pour manipuler les flux</Heading>
            <Appear>
              <Text textSize=".8em">aggregate / all / amb / and / any / asObservable / average / buffer /
                bufferWithCount / bufferWithTime / bufferWithTimeOrCount / catch / combineLatest / concat / concatAll /
                concatMap / connect / controlled / count / debounce / defaultIfEmpty / delay / delaySubscription /
                dematerialize / distinct / distinctUntilChanged / do / doOnNext / doOnError / doOnCompleted / doWhile /
                elementAt / every / expand / extend / filter / finally | ensure / find / findIndex / first / flatMap /
                flatMapFirst / flatMapLatest / flatMapObserver / flatMapWithMaxConcurrent / forkJoin / groupBy /
                groupByUntil / groupJoin / ignoreElements / includes / isEmpty / join / last / lastIndexOf / let /
                manySelect / map / max / maxBy / merge / mergeAll / min / minBy / multicast / observeOn /
                onErrorResumeNext / pairwise / partition / pausable / pausableBuffered / pluck / publish / publishLast /
                publishValue / share / shareReplay / shareValue / refCount / reduce / repeat / replay / retry /
                retryWhen / sample / scan / select / selectConcat / selectMany / selectManyObserver / sequenceEqual /
                single / singleInstance / skip / skipLast / skipLastWithTime / skipUntil / skipUntilWithTime / skipWhile
                / slice / some / startWith / subscribe | forEach / subscribeOn / sum / switch | switchLatest /
                switchFirst / take / takeLast / takeLastBuffer / takeLastBufferWithTime / takeLastWithTime / takeUntil /
                takeUntilWithTime / takeWhile / tap / tapOnNext / tapOnError / tapOnCompleted / throttle / timeInterval
                / timeout / timestamp / toArray / where / window / windowWithCount / windowWithTime /
                windowWithTimeOrCount / withLatestFrom / zip / zipIterable / </Text>
            </Appear>
          </Slide>


          <Slide bgColor="black">
            <Heading fit caps>La fonction map()</Heading>
            <CodePane source={require("raw!../assets/stream.example2.code")}
                      textSize=".9em"/>
          </Slide>

          <Slide>
            <Heading fit caps margin="0 0 .2em">Quelques précisions</Heading>
            <Layout>
              <Fill><Heading fit size={2}>Les flux peuvent être chaud ou froid</Heading>
                <Text textAlign="left" margin=".7em 0">Les froids produisent des valeurs juste au moment de l'appel à
                  la
                  méthode
                  subscribe()</Text>
                <Text textAlign="left">
                  Les chauds, produisent des valeurs avant leur souscription (exemple: l'événement click)</Text>
              </Fill>
              <Fill><Image src={images.katty.replace("/", "")} width="90%"/></Fill>
            </Layout>
            <Text textColor="secondary" textSize=".6em" margin="1em 0">Source image:
              katyperry.wikia.com</Text>

          </Slide>

          <Slide>
            <Heading fit caps margin="0 0 .2em">Quelques précisions (bis)</Heading>
            <Heading fit size={2}>Les flux sont fainéants (lazy en anglais)</Heading>

            <CodePane lang="javascript"
                      source={require("raw!../assets/code.example7.code")}
                      textSize=".6em"/>
          </Slide>

          <Slide>
            <Heading fit caps>Pourquoi s'y mettre ?</Heading>
            <List>
              <Appear><ListItem>Programmation fonctionnelle réactive</ListItem></Appear>
              <Appear><ListItem>Code beacoup plus clair pour des problématiques complexes</ListItem></Appear>
              <Appear><ListItem>Angular2, Cycle.JS, et bien d'autres se basent dessus</ListItem></Appear>
              <Appear><ListItem>Les Observables risquent d'être natifs en JS dans un futur proche</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading fit caps>Toujours pas convaincu ?</Heading>
            <List>
              <Appear><ListItem>Pas besoin de connaître toute la librairie pour l'utiliser (comme
                Lodash)</ListItem></Appear>
              <Appear><ListItem>La librairie est disponible dans d'autres langages:</ListItem></Appear>
              <Appear><ListItem>.NET, C++, JS, Ruby et Python pour RxJS 4</ListItem></Appear>
              <Appear><ListItem>PHP, Java, Scala, Go, et bien d'autres pour la version 5 !</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading fit>Merci de votre attention :)</Heading>
            <Text>Des questions ?</Text>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
