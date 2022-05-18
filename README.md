[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <h3 align="center">Pathfinding Visualizer</h3>
  <p align="center"> https://maelitop.github.io/pathfinding-visualizer/ </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li>
          <a href="#algorithms">Algorithms</a>
          <ul>
            <li><a href="#dijkstra">Dijkstra's</a></li>
            <li><a href="#dijkstra">Depth-First Search</a></li>
            <li><a href="#dijkstra">Breadth-First Search</a></li>
            <li><a href="#dijkstra">Greedy Best-First Search</a></li>
            <li><a href="#dijkstra">A<abbr>*</abbr> Search</a></li>
          </ul>
        </li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#try-it">Try it</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#references">References</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
**A react-based app to help visualizing typical graph searching algorithms**

### Algorithms

#### Dijkstra

<p align="center">
  <a> <img src="images/dijkstra.gif" alt="Dijkstra"> </a>
</p>

Dijkstra's algorithm (or Dijkstra's Shortest Path First algorithm, SPF algorithm) is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.

The algorithm exists in many variants. Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree. <source>Wikipedia</source>

### Built With

* [React.js](https://fr.reactjs.org/)

### Try It
```bash
# To install all dependencies of the project.
> yarn install
> npm install

# To run the app on http://localhost:3000.
> yarn start
> npm run start

# To run the unit tests
> yarn test:unit
> npm run test:unit

# To build the bundled app for production on the `build` folder.
> yarn build
> npm run build
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Maël LE PETIT - [@Maelito_P](https://twitter.com/Maelito_P) - contact@maelito.fr

Project Link: [https://github.com/MaelitoP/pathfinding-visualizer/](https://github.com/MaelitoP/pathfinding-visualizer/)



<!-- REFERENCES -->
## References
* [Clement Mihailescu](https://github.com/clementmihailescu) ['Pathfinding Visualizer'](https://clementmihailescu.github.io/Pathfinding-Visualizer/) project.

<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/MaelitoP/pathfinding-visualizer/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/maelitop/
