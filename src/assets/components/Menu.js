import '../assets/../css/menu.css';

function Menu() {
    return (
        <main>
        <h2 id="menuid">Menu</h2>
        <div class="container">
            <section class="menu">
                <h3 class="food-type">type 1</h3>
                <div class="food-item">
                    <div class="label">food1</div>
                    <b>$10</b>
                    <div class="description">description</div>
                </div>
                <div class="food-item">
                    <div class="label">food2</div>
                    <b>$10</b>
                    <div class="description">description</div>
                </div>
                <div class="food-item">
                    <div class="label">food3</div>
                    <b>$10</b>
                    <div class="description">description</div>
                </div>

            </section>
            <section class="menu">
                <h3 class="food-type">type 2</h3>
                <div class="food-item">
                    <div class="label">food4</div>
                    <b>$10</b>
                    <div class="description">description</div>
                </div>
                <div class="food-item">
                    <div class="label">food5</div>
                    <b>$10</b>
                    <div class="description">description</div>
                </div>
                <div class="food-item">
                    <div class="label">food6</div>
                    <b>$10</b>
                    <div class="description">description</div>
                </div>
            </section>
        </div>
    </main>
    );
  }
  
  export default Menu;