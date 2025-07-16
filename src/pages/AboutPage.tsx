import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 space-y-8 text-gray-700">
      <h1 className="text-3xl font-extrabold text-center text-blue-700">
        Acerca de esta Aplicación
      </h1>

      <p className="text-justify leading-relaxed">
        Esta aplicación fue desarrollada por <strong>Sarai Rodríguez</strong> y{" "}
        <strong>Joan Vásquez</strong>, estudiantes de la{" "}
        <strong>Universidad Abierta para Adultos (UAPA)</strong>, como proyecto final de{" "}
        <strong>Informática Gerencial</strong> bajo la tutoría de la profesora{" "}
        <strong>Reyna Hiraldo Trejo</strong>.
      </p>

      <p className="text-justify leading-relaxed">
        Su propósito es impulsar la <strong>educación vial en Higüey</strong>, evaluando el conocimiento de tránsito mediante un cuestionario interactivo y ofreciendo recomendaciones personalizadas para fomentar una movilidad segura y responsable.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🎯 Objetivo del Proyecto
        </h2>
        <p className="text-justify leading-relaxed">
          Desarrollar soluciones digitales (web/app) que contribuyan a la mejora del tránsito, la movilidad urbana y el ordenamiento territorial en la República Dominicana.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🌍 Objetivos de Desarrollo Sostenible (ODS)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>ODS 9:</strong> Fomentar la innovación mediante el desarrollo de soluciones digitales para educación vial.
          </li>
          <li>
            <strong>ODS 11:</strong> Promover comunidades más seguras y sostenibles mediante la formación de ciudadanos responsables.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🛠️ Herramienta Propuesta
        </h2>
        <p className="text-justify leading-relaxed">
          La aplicación funciona como un <strong>simulador educativo</strong> donde los usuarios responden preguntas sobre situaciones reales de tránsito. Al finalizar, reciben un diagnóstico y sugerencias personalizadas según su desempeño.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🧠 Aprendizajes Clave
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Aplicación de tecnología digital a problemas sociales reales.</li>
          <li>Conciencia sobre movilidad urbana y seguridad vial.</li>
          <li>Trabajo colaborativo y desarrollo de soluciones funcionales.</li>
          <li>Uso de buenas prácticas en diseño web y experiencia de usuario.</li>
        </ul>
      </section>

      <p className="text-center text-xs text-gray-500">
        Proyecto académico desarrollado con fines educativos para una movilidad urbana más segura y sostenible en República Dominicana.
      </p>
    </div>
  );
};

export default React.memo(AboutPage);
