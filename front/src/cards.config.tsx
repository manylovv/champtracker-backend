import ReadingImg from "../assets/images/081e0160-dffa-11ef-bf7c-02Reading42ac140003.jpg";
import PianoImg from "../assets/images/3becdfd0-dffa-11ef-ba28-02Piano42ac140003.jpg";
import GymImg from "../assets/images/10703a90-e085-11ef-8b9f-0242ac140003.jpg";
import StretchingImg from "../assets/images/321ca710-e0a5-11ef-88e0-0242ac140003.jpg";
import RunningImg from "../assets/images/4c61daa0-dffe-11ef-9334-0242aRunningc140003.jpg";
import CookingImg from "../assets/images/9cbf1c80-dffb-11ef-9e4d-02Cooking42ac140003.jpg";
import DrawingImg from "../assets/images/2db2be70-dffc-11ef-861b-0242ac140Drawing003.jpg";
import SleepImg from "..//assets/images/f4da4770-dffc-11ef-923b-0242acSleeping140003.jpg";
import BicycleImg from "..//assets/images/Bicycledffd-11ef-8e41-0242ac140003.jpg";
import BlogImg from "..//assets/images/Blogc140003.jpg";

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
    title: "Спорт",
    items: [
      {
        id: 1,
        title: "БЕГ КАЖДЫЙ ДЕНЬ",
        imageUrl: RunningImg,
        hints: [
          "Начинай с небольших дистанций и увеличивай их постепенно.",
          "Разминка и заминка важны для предотвращения травм.",
          "Бегай в удобной обуви, чтобы снизить нагрузку на суставы.",
        ],
        desc: "Бег улучшает выносливость, настроение и здоровье сердца. Это отличный способ очистить разум и перезагрузиться после дня. Он помогает держать себя в форме и развивает силу воли.",
        duration: [30],
      },
      {
        id: 2,
        title: "ЗАНЯТИЯ В ЗАЛЕ",
        imageUrl: GymImg,
        hints: [
          "Не гонись за весами, сосредоточься на технике упражнений.",
          "Записывай свои тренировки, чтобы отслеживать прогресс.",
          "Восстановление так же важно, как и нагрузка — не забывай про сон и питание.",
        ],
        desc: "Фитнес укрепляет тело, улучшает выносливость и придает уверенность. Тренировки в зале помогают сбросить стресс и выработать дисциплину. Главное — найти баланс между нагрузкой и восстановлением.",
        duration: [15, 30],
      },
      {
        id: 3,
        title: "КАТАНИЕ НА ВЕЛОСИПЕДЕ",
        imageUrl: BicycleImg,
        hints: [
          "Настрой посадку на велосипеде, чтобы избежать дискомфорта.",
          "Используй шлем и светоотражающие элементы для безопасности.",
          "Чередуй спокойные поездки с интервальными для лучшей выносливости.",
        ],
        desc: "Велосипед — это отличное кардио, способ перемещения и отдых для души. Он укрепляет мышцы, развивает координацию и позволяет исследовать новые места. Это еще и экологичный вид транспорта!",
        duration: [15, 30, 90],
      },
    ],
    color: "bg-[#fbf8f6]",
  },
  {
    title: "Творчество",
    items: [
      {
        id: 4,
        title: "ИГРА НА ИНСТРУМЕНТЕ",
        imageUrl: PianoImg,
        duration: [90],
        hints: [
          "Уделяй практике хотя бы 15 минут в день, но регулярно.",
          "Разбивай сложные композиции на небольшие части и учи постепенно.",
          "Записывай свою игру, чтобы отслеживать прогресс и исправлять ошибки.",
        ],
        desc: "Музыка развивает слух, координацию и даже память. Регулярная практика улучшает концентрацию и помогает выразить эмоции. Кроме того, игра на инструменте — это отличный способ расслабиться после трудного дня.",
      },
      {
        id: 5,
        title: "РИСОВАНИЕ",
        imageUrl: DrawingImg,
        hints: [
          "Рисуй каждый день по 5-10 минут, даже если нет вдохновения.",
          "Используй разные материалы — карандаши, акварель, маркеры.",
          "Копируй работы мастеров, чтобы понять техники и стили.",
        ],
        desc: "Рисование развивает креативность, улучшает внимание к деталям и помогает расслабиться. Оно позволяет выражать эмоции и тренировать усидчивость. Даже если ты не художник, процесс создания чего-то нового приносит удовольствие.",
        duration: [15, 30, 90],
      },
      {
        id: 6,
        title: "ГОТОВКА",
        imageUrl: CookingImg,
        hints: [
          "Начни с простых рецептов, постепенно усложняя блюда.",
          "Экспериментируй со специями, чтобы находить новые вкусы.",
          "Заготовки помогут сэкономить время в будни.",
        ],
        desc: "Готовка — это не только бытовая необходимость, но и творчество. Домашняя еда полезнее, вкуснее и позволяет контролировать свой рацион. К тому же процесс готовки может быть медитативным и расслабляющим.",
        duration: [15, 30, 90],
      },
    ],
    color: "bg-[#fbf8f6]",
  },
  {
    title: "Учеба",
    items: [
      {
        id: 7,
        title: "ЧТЕНИЕ КАЖДЫЙ ДЕНЬ",
        imageUrl: ReadingImg,
        hints: [
          "Начинай с небольших целей — хотя бы 5-10 страниц в день.",
          "Выбирай книги по интересам, чтобы процесс был увлекательным.",
          "Читай перед сном вместо соцсетей — это поможет лучше засыпать.",
        ],
        desc: "Чтение расширяет кругозор, развивает воображение и улучшает концентрацию. Даже 10-15 минут в день помогут освоить новые знания и снизить уровень стресса. Это полезная привычка, которая делает вас умнее и осознаннее.",
        duration: [30],
      },
      {
        id: 8,
        title: "РАБОТА НАД БЛОГОМ",
        imageUrl: BlogImg,
        hints: [
          "Определи тему блога и стиль подачи информации.",
          "Пиши регулярно, даже если сначала кажется, что никто не читает.",
          "Используй качественные фото и визуалы для привлечения внимания.",
        ],
        desc: "Блог — это способ делиться мыслями, развивать письменную речь и находить единомышленников. Он может стать твоим творческим пространством или даже работой. Главное — писать искренне и регулярно.",
        duration: [90],
      },
    ],
    color: "bg-[#fbf8f6]",
  },
  {
    title: "Здоровье",
    items: [
      {
        id: 9,
        title: "РАННИЕ ПОДЪЕМЫ",
        imageUrl: SleepImg,
        hints: [
          "Ложись спать в одно и то же время, чтобы легче вставать.",
          "Делай утренний ритуал (зарядка, завтрак, чтение) для приятного старта дня.",
          "Избегай гаджетов перед сном, чтобы быстрее засыпать.",
        ],
        desc: "Просыпаясь раньше, ты получаешь дополнительное время для себя. Утро без спешки помогает настроиться на продуктивный день. Это привычка, которая дает больше энергии и улучшает качество жизни",
        duration: [7, 15, 30],
      },
      {
        id: 10,
        title: "ЗАНЯТИЯ ЙОГОЙ",
        imageUrl: StretchingImg,
        hints: [
          "Начинай с простых асан и постепенно усложняй практику.",
          "Дыши глубоко и осознанно — дыхание важно так же, как и движения.",
          "Практикуйся утром для бодрости или вечером для расслабления.",
        ],
        desc: "Йога помогает расслабить тело, укрепить мышцы и развить гибкость. Она улучшает осанку, дыхание и даже внутреннее состояние. Регулярная практика снижает стресс и делает разум более спокойным.",
        duration: [30],
      },
    ],
    color: "bg-[#fbf8f6]",
  },
];
