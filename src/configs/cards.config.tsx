import ReadingImg from "../../public/images/081e0160-dffa-11ef-bf7c-02Reading42ac140003.jpg";
import PianoImg from "../../public/images/3becdfd0-dffa-11ef-ba28-02Piano42ac140003.jpg";
import GymImg from "../../public/images/10703a90-e085-11ef-8b9f-0242ac140003.jpg";
import StretchingImg from "../../public/images/321ca710-e0a5-11ef-88e0-0242ac140003.jpg";
import RunningImg from "../../public/images/4c61daa0-dffe-11ef-9334-0242aRunningc140003.jpg";
import CookingImg from "../../public/images/9cbf1c80-dffb-11ef-9e4d-02Cooking42ac140003.jpg";
import DrawingImg from "../../public/images/2db2be70-dffc-11ef-861b-0242ac140Drawing003.jpg";
import SleepImg from "../../public/images/f4da4770-dffc-11ef-923b-0242acSleeping140003.jpg";
import BicycleImg from "../../public/images/Bicycledffd-11ef-8e41-0242ac140003.jpg";
import BlogImg from "../../public/images/Blogc140003.jpg";

interface Card {
  id: number;
  title: string;
  desc?: string;
  hints?: string[];
  imageUrl: string;
  duration?: number[];
}

interface Category {
  color: string;
  title: string;
  items: Card[];
}

export const categories: Category[] = [
  {
    title: "Образование",
    items: [
      {
        id: 1,
        title: "ИЗУЧАТЬ ИНОСТРАННЫЙ ЯЗЫК",
        imageUrl: "/images/081e0160-dffa-11ef-bf7c-02Reading42ac140003.jpg",
        hints: [
          "Начинай с 5-10 минут в день, повторяя базовые слова и фразы.",
          "Используй приложения или карточки для запоминания слов.",
          "Смотри фильмы или слушай музыку на изучаемом языке.",
          "Практикуйся с носителями языка через разговорные клубы.",
          "Веди дневник на новом языке, даже если с ошибками.",
        ],
        desc: "Изучение языка открывает новые горизонты, улучшает память и помогает общаться с людьми по всему миру. Регулярная практика делает процесс увлекательным и доступным каждому.",
        duration: [30],
      },
      {
        id: 2,
        title: "РИСОВАТЬ КАЖДЫЙ ДЕНЬ",
        imageUrl: "/images/2db2be70-dffc-11ef-861b-0242ac140Drawing003.jpg",
        hints: [
          "Рисуй хотя бы 5 минут в день, даже простые наброски.",
          "Экспериментируй с разными материалами: карандаши, краски, маркеры.",
          "Копируй работы художников, чтобы освоить техники.",
          "Создавай эскизы из повседневной жизни для вдохновения.",
          "Не бойся ошибок — практика сделает тебя лучше.",
        ],
        desc: "Рисование пробуждает творческую энергию, учит видеть красоту в мелочах и расслабляет. Это способ выразить себя, даже если ты только начинаешь.",
        duration: [15, 30],
      },
    ],
    color: "bg-[#37bed5]",
  },
  {
    title: "Здоровье",
    items: [
      {
        id: 3,
        title: "ЛЕЧЬ СПАТЬ ДО ПОЛУНОЧИ",
        imageUrl: "/images/f4da4770-dffc-11ef-923b-0242acSleeping140003.jpg",
        hints: [
          "Создай ритуал перед сном: выключи гаджеты, почитай книгу.",
          "Ложись спать в одно и то же время, чтобы организм привык.",
          "Избегай кофеин и тяжелую пищу вечером.",
          "Обеспечь комфортную температуру и тишину в комнате.",
          "Делай легкую растяжку перед сном для расслабления.",
        ],
        desc: "Ранний сон улучшает здоровье, повышает энергию и помогает просыпаться свежим. Это простой шаг к гармонии и продуктивности каждый день.",
        duration: [7, 15, 30],
      },
      {
        id: 4,
        title: "БЕЗ АЛКОГОЛЯ",
        imageUrl: "/images/321ca710-e0a5-11ef-88e0-0242ac140003.jpg",
        hints: [
          "Замени алкоголь водой, травяным чаем или свежими соками.",
          "Найди альтернативные способы расслабления: прогулки, медитация.",
          "Веди дневник, чтобы отслеживать, как ты чувствуешь себя без алкоголя.",
          "Общайся с друзьями в новых активностях, не связанных с выпивкой.",
          "Консультируйся с врачом, если сложно отказаться от привычки.",
        ],
        desc: "Отказ от алкоголя улучшает здоровье, ясность ума и сон. Это шаг к более осознанной и энергичной жизни без лишних нагрузок на организм.",
        duration: [90],
      },
      {
        id: 5,
        title: "ЕЖЕДНЕВНАЯ РАСТЯЖКА",
        imageUrl: "/images/321ca710-e0a5-11ef-88e0-0242ac140003.jpg",
        hints: [
          "Начни с легких упражнений, добавляя по 1-2 движения каждый день.",
          "Дыши глубоко и медленно, чтобы снять напряжение в мышцах.",
          "Практикуй утром для бодрости или вечером для расслабления.",
          "Используй коврик или мягкую поверхность для комфорта.",
          "Следи за ощущениями тела — не делай резких движений.",
        ],
        desc: "Растяжка делает тело гибким, снимает стресс и улучшает осанку. Это легкий способ заботиться о себе и чувствовать легкость каждый день.",
        duration: [15, 30],
      },
    ],
    color: "bg-[#45cf95]",
  },
  {
    title: "Стиль жизни",
    items: [
      {
        id: 6,
        title: "ЧИТАТЬ КАЖДЫЙ ДЕНЬ",
        imageUrl: "/images/081e0160-dffa-11ef-bf7c-02Reading42ac140003.jpg",
        hints: [
          "Ставь цель читать хотя бы 5-10 страниц в день.",
          "Выбирай книги, которые вдохновляют или учат чему-то новому.",
          "Читай перед сном вместо гаджетов для лучшего сна.",
          "Делай заметки, чтобы запоминать ключевые идеи.",
          "Обсуждай прочитанное с друзьями, чтобы глубже понять материал.",
        ],
        desc: "Чтение обогащает знания, развивает воображение и помогает расслабиться. Даже несколько минут в день сделают тебя умнее и спокойнее.",
        duration: [30],
      },
      {
        id: 7,
        title: "КУЛИНАРНЫЙ МАРАФОН",
        imageUrl: "/images/9cbf1c80-dffb-11ef-9e4d-02Cooking42ac140003.jpg",
        hints: [
          "Попробуй готовить по одному новому рецепту в неделю.",
          "Используй свежие ингредиенты для насыщенного вкуса.",
          "Экспериментируй со специями, чтобы найти свои любимые сочетания.",
          "Готовь небольшими порциями, чтобы не тратить продукты зря.",
          "Делай фото блюд, чтобы вдохновлять себя и других.",
        ],
        desc: "Готовка — это творчество и забота о здоровье. Домашние блюда приносят удовольствие, позволяют контролировать рацион и создают уют в доме.",
        duration: [15, 30, 90],
      },
    ],
    color: "bg-[#f5806a]",
  },
  {
    title: "Осознанность",
    items: [
      {
        id: 8,
        title: "МЕДИТИРОВАТЬ КАЖДЫЙ ДЕНЬ",
        imageUrl: "/images/Blogc140003.jpg",
        hints: [
          "Начинай с 5 минут медитации, постепенно увеличивая время.",
          "Выбирай тихое место без отвлекающих факторов.",
          "Сосредоточься на дыхании или используй гайды для начинающих.",
          "Медитируй утром для энергии или вечером для успокоения.",
          "Веди журнал, чтобы отслеживать свои ощущения после практики.",
        ],
        desc: "Медитация успокаивает разум, снижает стресс и улучшает концентрацию. Это простой способ найти внутренний покой и начать день с ясностью.",
        duration: [90],
      },
      {
        id: 9,
        title: "ПРОСЛЕДИТЬ ЗА РАСХОДАМИ",
        imageUrl: "/images/f4da4770-dffc-11ef-923b-0242acSleeping140003.jpg",
        hints: [
          "Веди бюджет в приложении или записывай расходы вручную.",
          "Ставь ежемесячные лимиты для разных категорий трат.",
          "Анализируй, на что уходят деньги, и исключай лишнее.",
          "Планируй крупные покупки заранее, чтобы избежать импульсивных трат.",
          "Рассмотри способы экономии, такие как скидки или распродажи.",
        ],
        desc: "Контроль расходов помогает управлять финансами, экономить и чувствовать уверенность в будущем. Это привычка, которая приносит спокойствие и порядок в жизнь.",
        duration: [15, 30],
      },
      {
        id: 10,
        title: "ПОДВОДИТЬ ИТОГИ ДНЯ",
        imageUrl: "/images/3becdfd0-dffa-11ef-ba28-02Piano42ac140003.jpg",
        hints: [
          "Вечером выделяй 5-10 минут на размышления о дне.",
          "Записывай достижения, даже небольшие, в дневник или приложение.",
          "Оцени свои эмоции и научись видеть уроки в ошибках.",
          "Планируй следующий день, чтобы чувствовать себя организованным.",
          "Делай это в спокойной обстановке, чтобы расслабиться перед сном.",
        ],
        desc: "Подведение итогов дня помогает понять свои успехи, настроиться на будущее и снизить тревогу. Это простой ритуал, который делает жизнь осознаннее и гармоничнее.",
        duration: [15, 30],
      },
    ],
    color: "bg-[#ed9aab]",
  },
];
