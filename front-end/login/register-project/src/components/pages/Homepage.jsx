function Homepage() {
  // Funzione per effettuare lo scroll alla parte superiore della pagina
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-[1444px] p-20 text-justify">
          <h1 className="text-center p-[15px]">Homepage Example</h1>
          <p className="pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            blanditiis, quas dolorum, adipisci eos veritatis numquam at,
            obcaecati amet laboriosam recusandae delectus libero eveniet iste
            distinctio sequi fugiat. Perspiciatis, aliquam! Perspiciatis,
            adipisci tenetur, quam amet explicabo ipsam odio, at deserunt rem
            veniam omnis. Quos, voluptas provident vel vitae et iste blanditiis,
            cumque veritatis minus eius recusandae distinctio corrupti assumenda
            aliquam? Excepturi odio ipsum saepe. Ex a dicta, amet officia error
            commodi consectetur vero eligendi ipsum. Tempora officia repellat,
            amet voluptatem vitae, eum odio ipsum fuga ex eos accusantium quis
            laboriosam.
          </p>
          <p className="pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            nesciunt explicabo possimus ipsum vero itaque magnam esse aspernatur
            amet dolorum officiis. Ipsa ab repudiandae, architecto adipisci
            perferendis dolore aliquid? Pariatur.
          </p>
          <p className="pb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            ipsa numquam non, quae sint quod fugiat eveniet quas placeat, eaque
            fuga nihil libero. Rerum ut ratione iste dicta iusto ipsum.
            Exercitationem excepturi ipsa ullam? Illum sint corrupti perferendis
            voluptatem, nostrum delectus at est cum, praesentium saepe
            aspernatur dignissimos cupiditate repudiandae eligendi aperiam porro
            pariatur, accusantium voluptates a aliquid maxime assumenda? Ea quo
            illum maiores, aliquid ipsa, sit ullam at hic nostrum, quidem sequi
            architecto eveniet ducimus provident natus est maxime accusantium
            blanditiis sint corrupti illo eius. Repellendus eaque natus
            assumenda? Ea, iste maiores amet asperiores qui, dolorum veritatis
            earum eaque voluptates soluta eius. Doloremque ratione laudantium
            animi inventore facere et quo accusamus, veritatis illo
            reprehenderit deleniti aliquam, ullam dicta autem. Suscipit
            voluptatum accusamus necessitatibus expedita dicta exercitationem
            omnis, ab vitae nulla aliquam soluta blanditiis voluptatibus optio
            atque quasi itaque, officiis debitis minus magnam recusandae eius
            cum asperiores molestias temporibus. Cumque!ù
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            optio autem ullam fugit rem ducimus sit dolores commodi, tenetur est
            distinctio aperiam adipisci maiores, repudiandae molestiae
            asperiores, fugiat repellendus sunt. Repudiandae distinctio
            recusandae perspiciatis vero, praesentium quaerat. Debitis, ratione
            quas aliquam beatae provident perferendis delectus nisi obcaecati
            quidem quo quibusdam voluptatibus magni! Cum ut aliquid in autem
            accusantium quae distinctio.
          </p>
        </div>
        <div className="w-full h-[600px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img-example"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="w-full p-20 flex flex-col justify-center items-center">
        <section className="max-w-[1444px] flex items-center flex-wrap lg:flex-nowrap gap-[15%] justify-center h-[500px] text-justify">
          <div>
            <h1 className="text-center p-[15px]">Homepage Example</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate incidunt, rem doloremque nobis reprehenderit eveniet
              doloribus recusandae magni expedita eum saepe praesentium officia
              accusamus iure tempore quibusdam omnis non facere. Fuga asperiores
              ratione minima, suscipit hic beatae quam optio libero unde vero
              voluptas debitis harum? Blanditiis excepturi velit incidunt eum!
              Omnis illo itaque voluptas placeat dolorum earum rerum, maxime
              quam. Aliquid optio molestiae praesentium exercitationem
              voluptatem laudantium saepe vitae neque porro debitis, nesciunt
              earum amet, magni repudiandae possimus quasi. Atque, accusamus.
              Sequi consectetur eaque officiis molestiae omnis a magnam
              explicabo? Quia at cupiditate, laboriosam, nulla, voluptatem eos
              nisi sit beatae totam esse adipisci alias? Mollitia corrupti
              excepturi explicabo numquam blanditiis reiciendis consectetur
              obcaecati recusandae veritatis provident distinctio vero, autem
              expedita.
            </p>
          </div>
        </section>
        <section className="max-w-[1444px] bg-[#232323] text-white p-10 bg-gradient-to-r flex flex-row-reverse items-center flex-wrap lg:flex-nowrap gap-[15%] justify-center h-[500px] text-justify">
          <div>
            <h1 className="text-center p-[15px]">Homepage Example 1</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate incidunt, rem doloremque nobis reprehenderit eveniet
              doloribus recusandae magni expedita eum saepe praesentium officia
              accusamus iure tempore quibusdam omnis non facere. Fuga asperiores
              ratione minima, suscipit hic beatae quam optio libero unde vero
              voluptas debitis harum? Blanditiis excepturi velit incidunt eum!
              Omnis illo itaque voluptas placeat dolorum earum rerum, maxime
              quam.
            </p>
          </div>
        </section>
        <section className="max-w-[1444px] flex items-center flex-wrap lg:flex-nowrap gap-[15%] justify-center h-[500px] text-justify">
          <div>
            <h1 className="text-center p-[15px]">Homepage Example 2</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate incidunt, rem doloremque nobis reprehenderit eveniet
              doloribus recusandae magni expedita eum saepe praesentium officia
              accusamus iure tempore quibusdam omnis non facere. Fuga asperiores
              ratione minima, suscipit hic beatae quam optio libero unde vero
              voluptas debitis harum? Blanditiis excepturi velit incidunt eum!
              Omnis illo itaque voluptas placeat dolorum earum rerum, maxime
              quam. Aliquid optio molestiae praesentium exercitationem
              voluptatem laudantium saepe vitae neque porro debitis, nesciunt
              earum amet, magni repudiandae possimus quasi. Atque, accusamus.
              Sequi consectetur eaque officiis molestiae omnis a magnam
              explicabo? Quia at cupiditate, laboriosam, nulla, voluptatem eos
              nisi sit beatae totam esse adipisci alias? Mollitia corrupti
              excepturi explicabo numquam blanditiis reiciendis consectetur
              obcaecati recusandae veritatis provident distinctio vero, autem
              expedita. Quia at cupiditate, laboriosam, nulla, voluptatem eos
              nisi sit beatae totam esse adipisci alias? Mollitia corrupti
              excepturi explicabo numquam blanditiis reiciendis consectetur
              obcaecati recusandae veritatis provident distinctio vero, autem
              expedita.
            </p>
          </div>
        </section>
      </div>
      <div className="content bg-[#232323] w-full p-4 cursor-n-resize">
        <h3 onClick={scrollToTop} className="text-shadows text-white text-center">
          Scroll to Top ↕️
        </h3>
      </div>
    </>
  );
}
export default Homepage;
