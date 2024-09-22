import logoImg from "/src/assets/colagem-de-animal.jpg";

export function About() {
  return (
    <article className="w-full max-w-5xl px-4 mx-auto mb-4">
      <h2 className="font-bold text-2xl mb-4 mt-10 text-[#000958] underline decoration-orange-600">
        Nós Conheça
      </h2>
      <div className="flex flex-col md:flex-row px-3">
        <div className="flex-1">
          <p className="text-lg lg:text-xl mb-4 text-justify  px-3">
            Aqui <strong className="text-[#000958]">PetDev</strong> nossa paixão
            é oferecer produtos de qualidade que atendam às necessidades do seu
            pet. De alimentos nutritivos a acessórios que garantem o conforto no
            dia a dia, você encontrará em nossa loja tudo o que seu companheiro
            precisa para uma vida saudável e feliz.
          </p>

          <p className="text-lg lg:text-xl mb-4 text-justify  px-3">
            Não importa o tipo de pet que você tem, nós temos algo especial para
            eles. De cachorros a gatos, aves a roedores, nossa variedade de
            produtos abrange todas as necessidades. Venha conferir os nossos
            produtos e serviços e encontrar o melhor para o seu fiel amigo.
            <strong className="text-[#000958]"> PetDev</strong>, o nosso cliente
            é o seu pet!
          </p>
        </div>
        <div className="flex-1 md:mt-10">
          <img src={logoImg} alt="" className="object-contain" />
        </div>
      </div>
    </article>
  );
}
