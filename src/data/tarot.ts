// All 78 tarot cards — German interpretations.

export type Suit = "wands" | "cups" | "swords" | "pentacles";
export type Element = "Feuer" | "Wasser" | "Luft" | "Erde";

export interface MajorCard {
  type: "major";
  n: number;
  name: string;
  en: string;
  glyph: string;
  planet: string;
  element: Element;
  keywords: string[];
  up: string;
  rev: string;
}

export interface MinorCard {
  type: "minor";
  n: number;
  suit: Suit;
  suitName: "Stäbe" | "Kelche" | "Schwerter" | "Münzen";
  element: Element;
  glyph: string;
  name: string;
  rank: string;
  keywords: string[];
  up: string;
  rev: string;
}

export type TarotCard = MajorCard | MinorCard;

// ─── Große Arkana ─────────────────────────────────────────────────
const major: MajorCard[] = [
  {
    type: "major", n: 0, name: "Der Narr", en: "The Fool",
    glyph: "☉", planet: "Uranus", element: "Luft",
    keywords: ["Anfang", "Freiheit", "Unschuld"],
    up:  "Neubeginn, Spontaneität, Unschuld, Abenteuerlust, Vertrauen ins Universum. Du stehst am Rand eines neuen Kapitels und springst mit Leichtigkeit ins Unbekannte. Offen für alles, unbelastet von der Vergangenheit.",
    rev: "Leichtsinn, Naivität, Unbesonnenheit, mangelnde Planung. Du riskierst zu viel ohne nachzudenken, oder du blockierst dich selbst aus Angst vor dem Sprung.",
  },
  {
    type: "major", n: 1, name: "Der Magier", en: "The Magician",
    glyph: "☿", planet: "Merkur", element: "Luft",
    keywords: ["Wille", "Manifestation", "Schöpfung"],
    up:  "Willenskraft, Manifestation, Fokus, Schöpferkraft. Du hast alle Werkzeuge zur Verfügung – Feuer, Wasser, Luft, Erde – und die Fähigkeit, sie gezielt einzusetzen. Jetzt ist die Zeit zu handeln.",
    rev: "Manipulation, Täuschung, ungenutztes Potential. Entweder täuschst du andere (oder dich selbst), oder du lässt deine Fähigkeiten ungenutzt liegen.",
  },
  {
    type: "major", n: 2, name: "Die Hohepriesterin", en: "The High Priestess",
    glyph: "☽", planet: "Mond", element: "Wasser",
    keywords: ["Intuition", "Mysterium", "Inneres"],
    up:  "Intuition, inneres Wissen, Geduld, Unterbewusstsein, Geheimnisse. Die Antworten liegen bereits in dir – höre auf deine innere Stimme statt auf äußere Ratschläge.",
    rev: "Verdrängte Gefühle, ignorierte Intuition, Geheimniskrämerei. Du ignorierst dein Bauchgefühl oder hältst Informationen zurück, die ans Licht sollten.",
  },
  {
    type: "major", n: 3, name: "Die Herrscherin", en: "The Empress",
    glyph: "♀", planet: "Venus", element: "Erde",
    keywords: ["Fülle", "Schöpfung", "Sinnlichkeit"],
    up:  "Fruchtbarkeit, Überfluss, Natur, Fürsorge, Schöpfung, Sinnlichkeit. Eine Phase des Wachstums und der Fülle – kreativ, körperlich oder emotional. Mütterliche Energie, die nährt und erschafft.",
    rev: "Abhängigkeit, Kreativitätsblockade, Überfürsorglichkeit. Du vernachlässigst dich selbst zugunsten anderer, oder du bist in deiner kreativen Energie blockiert.",
  },
  {
    type: "major", n: 4, name: "Der Herrscher", en: "The Emperor",
    glyph: "♈", planet: "Mars", element: "Feuer",
    keywords: ["Struktur", "Macht", "Ordnung"],
    up:  "Autorität, Stabilität, Struktur, Führung, Disziplin. Eine starke Vaterfigur oder Führungsrolle. Ordnung schaffen, Verantwortung übernehmen, materiellen Erfolg durch Disziplin erzielen.",
    rev: "Tyrannei, Starrheit, emotionale Unterdrückung. Macht wird missbraucht – entweder von dir oder anderen gegenüber dir. Zu viel Kontrolle erstickt Wachstum.",
  },
  {
    type: "major", n: 5, name: "Der Hierophant", en: "The Hierophant",
    glyph: "♉", planet: "Venus", element: "Erde",
    keywords: ["Tradition", "Lehre", "Glaube"],
    up:  "Tradition, spirituelle Führung, Institutionen, Lehrmeister, Konformität. Du befolgst bewährte Wege oder suchst einen Mentor. Religiöse oder gesellschaftliche Strukturen spielen eine Rolle.",
    rev: "Rebellion, Freidenkertum, Dogmatismus. Du brichst mit Konventionen – bewusst oder erzwungen. Oder du bist blind einer Doktrin gefolgt, die dir nicht mehr dient.",
  },
  {
    type: "major", n: 6, name: "Die Liebenden", en: "The Lovers",
    glyph: "♊", planet: "Merkur", element: "Luft",
    keywords: ["Wahl", "Verbindung", "Werte"],
    up:  "Liebe, Harmonie, tiefe Verbindung, Wertausrichtung, wichtige Entscheidungen. Es geht nicht nur um romantische Liebe – sondern um die Frage: Was liebst du wirklich? Wozu stehst du?",
    rev: "Fehlausrichtung, innere Konflikte, Wertewidersprüche. Eine Beziehung oder Entscheidung ist aus dem Gleichgewicht. Du handelst gegen deine eigenen Werte.",
  },
  {
    type: "major", n: 7, name: "Der Wagen", en: "The Chariot",
    glyph: "♋", planet: "Mond", element: "Wasser",
    keywords: ["Wille", "Kontrolle", "Sieg"],
    up:  "Kontrolle, Willenskraft, Sieg, Entschlossenheit, Triumph durch Disziplin. Du steuerst gegensätzliche Kräfte mit starker Hand. Bewegung vorwärts trotz Hindernissen.",
    rev: "Kontrollverlust, Aggression, Ziellosigkeit. Die gegensätzlichen Kräfte reißen dich auseinander. Du drängst zu stark oder verlierst die Richtung.",
  },
  {
    type: "major", n: 8, name: "Die Kraft", en: "Strength",
    glyph: "♌", planet: "Sonne", element: "Feuer",
    keywords: ["Mut", "Sanftmut", "Innere Macht"],
    up:  "Innere Stärke, Mut, Sanftmut, Selbstbeherrschung, Ausdauer. Wahre Kraft kommt nicht aus Gewalt, sondern aus Mitgefühl und innerer Ruhe. Du bändigst deine wilden inneren Triebe.",
    rev: "Selbstzweifel, Schwäche, fehlende Selbstdisziplin. Du zweifelst an deiner Kraft oder unterdrückst sie. Angst überwältigt deine Stärke.",
  },
  {
    type: "major", n: 9, name: "Der Eremit", en: "The Hermit",
    glyph: "♍", planet: "Merkur", element: "Erde",
    keywords: ["Rückzug", "Suche", "Licht im Inneren"],
    up:  "Innere Einkehr, Weisheit, Reflexion, spirituelle Suche, Einsamkeit als Wahl. Du ziehst dich zurück, um tiefer zu suchen. Ein weiser Lehrer – innerer oder äußerer – leuchtet dir den Weg.",
    rev: "Erzwungene Isolation, Sturheit, Ablehnung von Hilfe. Du isolierst dich aus Angst oder Verbitterung, statt aus Weisheit. Oder du meidest die nötige Einsamkeit zur Reflexion.",
  },
  {
    type: "major", n: 10, name: "Das Rad des Schicksals", en: "Wheel of Fortune",
    glyph: "♃", planet: "Jupiter", element: "Feuer",
    keywords: ["Wandel", "Schicksal", "Zyklus"],
    up:  "Wendepunkt, Schicksal, Glück, Zyklen des Lebens, unvermeidlicher Wandel. Das Rad dreht sich zu deinen Gunsten. Erkenne die Muster deines Lebens und reite auf der Welle.",
    rev: "Pech, Widerstand gegen den Wandel, festgefahrene Muster, schlechtes Karma. Du kämpfst gegen das Unvermeidliche oder wiederholst alte Fehler.",
  },
  {
    type: "major", n: 11, name: "Die Gerechtigkeit", en: "Justice",
    glyph: "♎", planet: "Venus", element: "Luft",
    keywords: ["Wahrheit", "Balance", "Karma"],
    up:  "Fairness, Wahrheit, Recht, Ursache und Wirkung, Karma, Ausgewogenheit. Entscheidungen werden fair getroffen. Du erntest, was du gesät hast – positiv wie negativ.",
    rev: "Ungerechtigkeit, Unehrlichkeit, mangelnde Verantwortung. Eine Situation ist ungerecht, oder du weichst der Wahrheit aus. Konsequenzen werden umgangen.",
  },
  {
    type: "major", n: 12, name: "Der Gehängte", en: "The Hanged Man",
    glyph: "♆", planet: "Neptun", element: "Wasser",
    keywords: ["Perspektive", "Hingabe", "Pause"],
    up:  "Pause, Loslassen, Opfer, neue Perspektive, Übergangszustand. Durch Hingabe und Innehalten entsteht Erleuchtung. Was aufgegeben wird, öffnet Raum für etwas Höheres.",
    rev: "Festhalten, Stagnation, Aufschub, fehlende Opferbereitschaft. Du weigerst dich loszulassen, was dich blockiert. Oder du opferst dich unnötig.",
  },
  {
    type: "major", n: 13, name: "Der Tod", en: "Death",
    glyph: "♏", planet: "Pluto", element: "Wasser",
    keywords: ["Wandlung", "Ende", "Neugeburt"],
    up:  "Transformation, Ende und Neuanfang, tiefgreifender Wandel, Loslassen des Alten. Kein wörtlicher Tod – aber etwas Altes muss sterben, damit etwas Neues entstehen kann. Unausweichlich und notwendig.",
    rev: "Widerstand gegen Wandel, Stagnation, Angst vor dem Neuen. Du klammerst dich an das Alte, obwohl es bereits am Sterben ist. Das blockiert Wachstum.",
  },
  {
    type: "major", n: 14, name: "Die Mäßigkeit", en: "Temperance",
    glyph: "♐", planet: "Jupiter", element: "Feuer",
    keywords: ["Mischung", "Heilung", "Balance"],
    up:  "Balance, Geduld, Augenmaß, Heilung, innerer Frieden, langfristige Perspektive. Du mischst gegensätzliche Energien harmonisch. Alles zur rechten Zeit – nicht erzwingen.",
    rev: "Imbalance, Ungeduld, Exzesse, fehlende Harmonie. Du übertreibst in eine Richtung oder bist zu ungeduldig, um den natürlichen Fluss abzuwarten.",
  },
  {
    type: "major", n: 15, name: "Der Teufel", en: "The Devil",
    glyph: "♑", planet: "Saturn", element: "Erde",
    keywords: ["Bindung", "Schatten", "Verführung"],
    up:  "Schatten, Bindungen, Materialismus, Sucht, Ausweglosigkeit. Du bist an etwas gebunden – Gewohnheiten, Beziehungen, Überzeugungen. Die Ketten sind real, aber du hast sie selbst angelegt.",
    rev: "Befreiung, Selbstbewusstsein über Fesseln, Loslösung. Du erkennst deine Bindungen und befreist dich. Schatten werden ins Licht gebracht.",
  },
  {
    type: "major", n: 16, name: "Der Turm", en: "The Tower",
    glyph: "♂", planet: "Mars", element: "Feuer",
    keywords: ["Umsturz", "Offenbarung", "Bruch"],
    up:  "Plötzlicher Umbruch, Chaos, Zerstörung falscher Strukturen, Offenbarung durch Krise. Was auf falschen Fundamenten gebaut wurde, bricht zusammen. Schmerzhaft – aber befreiend.",
    rev: "Abgewendetes Chaos, innere Erschütterungen, aufgebauter Druck. Die Krise kommt innerlich statt äußerlich. Oder du versuchst vergeblich, einen unausweichlichen Zusammenbruch aufzuhalten.",
  },
  {
    type: "major", n: 17, name: "Der Stern", en: "The Star",
    glyph: "♒", planet: "Uranus", element: "Luft",
    keywords: ["Hoffnung", "Inspiration", "Heilung"],
    up:  "Hoffnung, Erneuerung, Inspiration, spirituelle Verbindung, Heilung nach der Dunkelheit. Nach dem Sturm kommt die Stille. Du bist auf dem richtigen Weg – vertrau dem Universum.",
    rev: "Hoffnungslosigkeit, Mutlosigkeit, mangelnder Glaube. Du hast den Kontakt zu deiner inneren Führung verloren. Zweifel überschatten den Weg.",
  },
  {
    type: "major", n: 18, name: "Der Mond", en: "The Moon",
    glyph: "☾", planet: "Mond", element: "Wasser",
    keywords: ["Illusion", "Traum", "Unbewusstes"],
    up:  "Illusion, Unterbewusstsein, Angst, Träume, verborgene Wahrheiten. Nicht alles ist so, wie es scheint. Dein Unterbewusstsein sendet wichtige Signale – höre hin.",
    rev: "Klarheit kehrt zurück, Verwirrung löst sich, verborgenes wird enthüllt. Der Nebel lichtet sich. Ängste verlieren ihre Macht, die Wahrheit tritt ans Licht.",
  },
  {
    type: "major", n: 19, name: "Die Sonne", en: "The Sun",
    glyph: "☼", planet: "Sonne", element: "Feuer",
    keywords: ["Freude", "Klarheit", "Vitalität"],
    up:  "Freude, Erfolg, Vitalität, Klarheit, Kindlichkeit, Leben im Licht. Eine der positivsten Karten im Deck. Energie, Optimismus und Lebensfreude – du strahlst und wirst gestrahlt.",
    rev: "Trübsinn, Pessimismus, übertriebener Optimismus, Kindheitswunden. Die Energie ist da, aber etwas trübt das Licht. Oder du siehst die Dinge durch eine zu rosarote Brille.",
  },
  {
    type: "major", n: 20, name: "Das Gericht", en: "Judgement",
    glyph: "♅", planet: "Pluto", element: "Feuer",
    keywords: ["Erwachen", "Ruf", "Erneuerung"],
    up:  "Wiedergeburt, innerer Ruf, Erwachen, Absolution, Vergangenheit loslassen. Du wirst gerufen – zu einem neuen Leben, einer neuen Version deiner selbst. Höre auf den Ruf.",
    rev: "Selbstzweifel, Ablehnung der inneren Stimme, Selbstkritik blockiert Wandel. Du ignorierst deinen inneren Ruf oder urteilst zu hart über dich selbst.",
  },
  {
    type: "major", n: 21, name: "Die Welt", en: "The World",
    glyph: "♄", planet: "Saturn", element: "Erde",
    keywords: ["Vollendung", "Ganzheit", "Integration"],
    up:  "Vollendung, Integration, Ganzheit, Abschluss, kosmisches Bewusstsein, Leistung. Ein Zyklus ist vollendet. Du hast alles gelernt, was dieser Weg zu lehren hatte. Feiere es.",
    rev: "Mangelnde Vollendung, Kurzschlüsse, unvollendete Ziele. Du bist kurz vor dem Ziel stehen geblieben. Ein letzter Schritt fehlt noch.",
  },
];

// ─── Kleine Arkana — Suit-spezifische Bedeutungen ─────────────────
type RankSeed = { rank: string; keywords: string[]; up: string; rev: string };
type SuitMeanings = Record<number, RankSeed>;

const cupsMeanings: SuitMeanings = {
  1:  { rank: "Ass",     keywords: ["Neue Liebe"],       up: "Neue Liebe, emotionaler Neubeginn, überfließendes Gefühl, spirituelle Verbindung. Das Herz öffnet sich – für eine Person, eine Idee oder das Leben selbst.",                                                                          rev: "Unterdrückte Gefühle, emotionaler Rückzug, innere Leere. Du hältst dein Herz verschlossen oder die emotionale Verbindung fehlt." },
  2:  { rank: "Zwei",    keywords: ["Verbindung"],        up: "Vereinigung, tiefe Partnerschaft, gegenseitige Anziehung, Harmonie, Commitment. Zwei Menschen auf Augenhöhe – in Liebe, Freundschaft oder geschäftlicher Verbindung.",                                                              rev: "Disharmonie, Ungleichgewicht, Missverständnisse, drohende Trennung. Die Verbindung ist aus dem Gleichgewicht – jemand gibt mehr als der andere." },
  3:  { rank: "Drei",    keywords: ["Gemeinschaft"],      up: "Feier, Freundschaft, Gemeinschaft, gemeinsame Freude, kreative Zusammenarbeit. Ein Grund zum Feiern – teile dein Glück mit anderen.",                                                                                              rev: "Klatsch, Isolation, Dreiecksdrama, Übermaß an Feiern. Die Gemeinschaft wird oberflächlich oder jemand spricht hinter deinem Rücken." },
  4:  { rank: "Vier",    keywords: ["Kontemplation"],     up: "Apathie, Kontemplation, Unzufriedenheit, innerer Rückzug. Du sitzt unter dem Baum und grübelst – dabei wird dir von außen ein neuer Kelch angeboten, den du nicht siehst.",                                                       rev: "Motivation kehrt zurück, neue Möglichkeiten werden erkannt, Handlungsbereitschaft. Du öffnest die Augen für das, was dir angeboten wird." },
  5:  { rank: "Fünf",    keywords: ["Verlust"],           up: "Verlust, Trauer, Enttäuschung, Bedauern. Drei Kelche sind umgefallen – aber zwei stehen noch. Der Schmerz ist real, doch du starrst nur auf das Verlorene.",                                                                        rev: "Akzeptanz, Heilung, Vorwärtsbewegung nach Verlust. Du wendest den Blick von dem, was verloren ist, hin zu dem, was noch bleibt." },
  6:  { rank: "Sechs",   keywords: ["Nostalgie"],         up: "Nostalgie, Kindheitserinnerungen, Unschuld, Güte, Geschenke aus der Vergangenheit. Eine schöne Erinnerung taucht auf – oder jemand aus der Vergangenheit kehrt zurück.",                                                           rev: "Festhalten an der Vergangenheit, unreife Nostalgie, emotionale Reife nötig. Du lebst zu sehr in Erinnerungen und verpasst das Jetzt." },
  7:  { rank: "Sieben",  keywords: ["Illusionen"],        up: "Illusionen, Fantasien, viele Optionen, Verwirrung, Tagträume. Vieles erscheint möglich – aber nicht alles ist real. Sei vorsichtig, welchen Träumen du folgst.",                                                                   rev: "Klarheit nach Verwirrung, realistische Entscheidung, Illusionen platzen. Der Nebel lichtet sich – du siehst die Dinge endlich so, wie sie wirklich sind." },
  8:  { rank: "Acht",    keywords: ["Aufbruch"],          up: "Loslassen, Aufbruch, etwas hinter sich lassen, Suche nach tieferer Bedeutung. Du hast alles, was du dir aufgebaut hast – und trotzdem reicht es nicht. Du brichst auf zu etwas Größerem.",                                        rev: "Festhalten, Angst vor dem Verlust, fehlende Bereitschaft zum Aufbruch. Du weißt, dass du gehen solltest – aber die Angst hält dich zurück." },
  9:  { rank: "Neun",    keywords: ["Zufriedenheit"],     up: "Zufriedenheit, Wunscherfüllung, emotionaler Wohlstand, Contentment. Die klassische 'Wunschkarte' – was du dir wünschst, kann sich erfüllen. Genieße das Leben.",                                                                    rev: "Übermaß, materielle Zufriedenheit ohne innere Erfüllung, unerfüllte Wünsche trotz allem. Äußerlich hast du alles – innerlich fehlt etwas." },
  10: { rank: "Zehn",    keywords: ["Familienglück"],     up: "Familienglück, emotionale Erfüllung, Dauerhaftigkeit, harmonische Beziehungen, gemeinsames Glück. Das emotionale Endziel – Liebe, Geborgenheit, Harmonie im Kreis der Liebsten.",                                                  rev: "Familienkonflikte, zerbrochene Verbindungen, mangelnde Harmonie. Das äußere Bild stimmt nicht mit der inneren Realität überein." },
  11: { rank: "Page",    keywords: ["Intuition"],         up: "Intuition, Kreativität, emotionale Neugier, träumerische Botschaften, künstlerischer Geist. Eine junge oder jung gebliebene Energie, die aus dem Herzen heraus handelt.",                                                           rev: "Emotionale Unreife, Stimmungsschwankungen, Verträumtheit, fehlender Fokus." },
  12: { rank: "Ritter",  keywords: ["Romantik"],          up: "Romantik, Charme, kreative Projekte, emotionale Intelligenz, sanfte Annäherung. Jemand kommt mit einem Angebot – romantisch, kreativ oder emotional bedeutsam.",                                                                    rev: "Moodiness, Täuschung, unrealistische Träume, sentimentale Stagnation." },
  13: { rank: "Königin", keywords: ["Mitgefühl"],         up: "Mitgefühl, Empathie, emotionale Sicherheit, Fürsorge, starke Intuition. Sie fühlt alles tief und trägt andere mit Würde. Emotionale Intelligenz auf höchstem Niveau.",                                                             rev: "Emotionale Abhängigkeit, Co-Abhängigkeit, eigene Bedürfnisse werden vernachlässigt." },
  14: { rank: "König",   keywords: ["Emotionale Balance"], up: "Emotionale Balance, Weisheit, Diplomatie, ruhige Autorität, fürsorgliche Stärke. Er ist stark und fürsorglich zugleich – ein emotionaler Anker für andere.",                                                                     rev: "Emotionale Manipulation, Launenhaftigkeit, unterdrückte Gefühle, emotionale Instabilität." },
};

const wandsMeanings: SuitMeanings = {
  1:  { rank: "Ass",     keywords: ["Neue Energie"],      up: "Neue Energie, Inspiration, Leidenschaft, Kreativkraft, Unternehmergeist, Zündung eines neuen Projekts. Das Feuer lodert auf – handle jetzt.",                                                                                       rev: "Verspäteter Start, Kreativblockade, mangelnde Motivation, falsche Richtung." },
  2:  { rank: "Zwei",    keywords: ["Planung"],           up: "Planung, Weitsicht, erste Schritte nach vorne, persönliche Macht. Du hast etwas aufgebaut – jetzt schaust du in die Ferne und planst dein nächstes Kapitel.",                                                                       rev: "Fehlende Planung, Zögerlichkeit, schlechte Vorbereitung, Heimweh nach dem Bekannten." },
  3:  { rank: "Drei",    keywords: ["Expansion"],         up: "Expansion, Fortschritt, Weitsicht, erste Früchte der Arbeit. Deine Schiffe sind ausgelaufen – die Investitionen zahlen sich aus, Neues kommt auf dich zu.",                                                                         rev: "Rückschläge, Verzögerungen, schlechtes Timing, mangelnde Weitsicht." },
  4:  { rank: "Vier",    keywords: ["Feier"],             up: "Feier, Heimkehr, Harmonie, Stabilität, Meilenstein. Ein Fundament wurde gelegt – Zeit innezuhalten und zu feiern, was aufgebaut wurde.",                                                                                            rev: "Instabilität, fehlende Heimat, unvollendete Ziele, innere Unruhe trotz äußerer Stabilität." },
  5:  { rank: "Fünf",    keywords: ["Wettbewerb"],        up: "Wettbewerb, Konflikte, Auseinandersetzungen, diverse Meinungen. Chaos und Konkurrenz – aber auch Energie und Antrieb. Kämpfe für deine Überzeugungen.",                                                                             rev: "Konfliktvermeidung, unterdrückter Wettbewerb, innere Unruhe, Kompromisssuche um jeden Preis." },
  6:  { rank: "Sechs",   keywords: ["Sieg"],              up: "Sieg, Anerkennung, Triumph, Führung, öffentliche Bestätigung. Du wirst für deine Arbeit gefeiert. Selbstvertrauen, das sich verdient hat.",                                                                                         rev: "Aufgeschobener Erfolg, mangelnde Anerkennung, Egoprobleme, Selbstzweifel trotz Leistung." },
  7:  { rank: "Sieben",  keywords: ["Verteidigung"],      up: "Verteidigung, Standhaftigkeit, Ausdauer gegen Widerstände, Mut zur eigenen Position. Du stehst auf einem erhöhten Punkt und verteidigst deinen Platz.",                                                                             rev: "Erschöpfung, aufgeben, überarbeitet, fehlende Ausdauer im letzten Moment." },
  8:  { rank: "Acht",    keywords: ["Geschwindigkeit"],   up: "Geschwindigkeit, rasche Bewegung, Nachrichten im Anflug, Tempo, Eile. Dinge nehmen Fahrt auf – kommuniziere klar und handle schnell.",                                                                                             rev: "Verzögerungen, Frustration, schlechte Kommunikation, mangelnde Bewegung." },
  9:  { rank: "Neun",    keywords: ["Ausdauer"],          up: "Ausdauer, Standhaftigkeit, letzter Widerstand, Schutz aus Erfahrung. Du bist erschöpft, aber du gibst nicht auf. Letzte Reserven mobilisieren.",                                                                                   rev: "Paranoide Vorsicht, Sturheit, Erschöpfung, aufgegebener Widerstand kurz vor dem Ziel." },
  10: { rank: "Zehn",    keywords: ["Überlastung"],       up: "Überlastung, Druck, zu viele Bürden. Du trägst die Last allein. Es ist Zeit zu delegieren – nicht alles muss von dir getragen werden.",                                                                                            rev: "Abladen der Last, Befreiung von Verantwortung, Burnout als Wendepunkt." },
  11: { rank: "Page",    keywords: ["Enthusiasmus"],      up: "Jugendliche Energie, Enthusiasmus, neue Ideen, Abenteuerlust, frische Inspiration. Eine explosive kreative Energie – noch ungeklärt, aber voller Potenzial.",                                                                       rev: "Impulsivität, mangelnde Energie, schlechte Nachrichten, übereilte Handlungen." },
  12: { rank: "Ritter",  keywords: ["Leidenschaft"],      up: "Aktion, Leidenschaft, charismatische Energie, Abenteuerlust, riskante Entscheidungen. Er bewegt sich schnell – manchmal zu schnell. Aber er zündet Feuer wo er erscheint.",                                                        rev: "Ungeduld, Überstürzung, fehlgeleitete Energie, Streit, mangelnde Ausdauer." },
  13: { rank: "Königin", keywords: ["Charisma"],          up: "Charisma, Unabhängigkeit, Bestimmtheit, soziale Kompetenz, Führungskraft. Sie weiß, was sie will und zieht andere magisch an. Wärme und Feuer in einer Person.",                                                                   rev: "Eifersucht, Herrschsucht, Unsicherheit hinter starker Fassade, mangelndes Selbstbewusstsein." },
  14: { rank: "König",   keywords: ["Vision"],            up: "Vision, Unternehmertum, Führung, Charisma, mutige Entscheidungen. Ein geborener Anführer mit brennender Vision. Er inspiriert andere, ihm zu folgen.",                                                                              rev: "Arroganz, Impulsivität, Tyrannei, übertriebener Ehrgeiz, fehlendes Follow-through." },
};

const swordsMeanings: SuitMeanings = {
  1:  { rank: "Ass",     keywords: ["Klarheit"],          up: "Klarheit, Wahrheit, Durchbruch, mentale Schärfe, neues Denken. Der Geist schneidet durch Illusion und Verwirrung – die Wahrheit tritt ans Licht.",                                                                                  rev: "Verwirrung, Chaos, mentale Blockade, falsche Vorstellungen, schlechte Entscheidungen." },
  2:  { rank: "Zwei",    keywords: ["Unentschlossenheit"], up: "Unentschlossenheit, Pattsituation, Weigerung zu sehen. Du hast die Augen verbunden, weil die Entscheidung zu schmerzhaft erscheint.",                                                                                             rev: "Informationsüberlastung, Lähmung durch zu viele Optionen, Selbstbetrug der verhindert." },
  3:  { rank: "Drei",    keywords: ["Herzschmerz"],       up: "Herzschmerz, Trauer, Trennung, emotionaler Schmerz. Drei Schwerter durchbohren das Herz – der Schmerz ist real. Aber er gehört dazu und er wird vergehen.",                                                                        rev: "Heilung, Freigabe, Vergeben, Verarbeitung von Verlust, Vergangenheit loslassen." },
  4:  { rank: "Vier",    keywords: ["Erholung"],          up: "Erholung, Rückzug, Stille, notwendige Pause. Der Ritter ruht – nicht aus Schwäche, sondern aus Klugheit. Regeneration ist jetzt das Wichtigste.",                                                                                  rev: "Wiederaufleben, Rückkehr, Erschöpfung trotz Pause, fehlende echte Erholung." },
  5:  { rank: "Fünf",    keywords: ["Konflikt"],          up: "Konflikt, Sieg um jeden Preis, Pyrrhussieg. Du hast gewonnen – aber zu welchem Preis? Wer wirklich gewinnt, wenn alle verlieren?",                                                                                                  rev: "Vergangene Konflikte loslassen, Versöhnung, Reue, Frieden schließen wollen." },
  6:  { rank: "Sechs",   keywords: ["Übergang"],          up: "Übergang, Aufbruch zu ruhigeren Gewässern. Du verlässt einen Ort des Schmerzes. Die Fahrt ist still und traurig – aber das Ziel ist ruhiger.",                                                                                     rev: "Kein Ausweg in Sicht, Stagnation, festsitzen im Konflikt, ungelöste Probleme folgen mit." },
  7:  { rank: "Sieben",  keywords: ["List"],              up: "List, Taktik, Heimlichkeit, allein agieren. Jemand handelt im Verborgenen – möglicherweise du selbst. Manchmal ist Cleverness nötig, manchmal ist es Betrug.",                                                                      rev: "Enthüllung, Geständnis, fehlgeschlagene Täuschung, Imposter-Syndrom." },
  8:  { rank: "Acht",    keywords: ["Gefangenschaft"],    up: "Einschränkung, mentale Gefangenschaft, Hilflosigkeit. Du bist gefesselt und mit verbundenen Augen – aber die Fesseln sind locker. Die Befreiung liegt in dir.",                                                                    rev: "Befreiung aus mentalen Fesseln, neue Sichtweise, Selbstermächtigung, der Ausbruch gelingt." },
  9:  { rank: "Neun",    keywords: ["Angst"],             up: "Angst, Nachtgedanken, Sorgen, Albträume. Du liegst nachts wach und dein Geist erschafft das Schlimmste. Die meisten dieser Ängste sind größer im Kopf als in der Realität.",                                                       rev: "Hoffnung nach der Dunkelheit, Überwindung von Ängsten, Heilung, das Schlimmste liegt hinter dir." },
  10: { rank: "Zehn",    keywords: ["Niederlage"],        up: "Niederlage, Verrat, schmerzhafter Abschluss. Zehn Schwerter im Rücken – dunkler geht es kaum. Aber: dies ist der absolute Tiefpunkt. Danach kann es nur aufwärtsgehen.",                                                           rev: "Langsame Erholung, Widerstandskraft, Unvermeidliches akzeptieren, der Morgen bricht an." },
  11: { rank: "Page",    keywords: ["Kommunikation"],     up: "Kommunikation, Wissbegierde, schnelles Denken, Direktheit, jugendlicher Intellekt. Er denkt schnell, spricht offen – manchmal zu offen.",                                                                                           rev: "Indiskretion, Klatsch, harte Worte ohne Nachdenken, übereilte Kommunikation." },
  12: { rank: "Ritter",  keywords: ["Mut"],               up: "Mut, Direktheit, schnelles Handeln, intellektuelle Schärfe. Er reitet mit voller Geschwindigkeit auf sein Ziel zu – nichts hält ihn auf.",                                                                                        rev: "Rücksichtslosigkeit, Arroganz, Impulsivität, überrumpelt andere ohne Rücksicht." },
  13: { rank: "Königin", keywords: ["Klarer Verstand"],   up: "Klarer Verstand, Unabhängigkeit, Direktheit, Ehrlichkeit, scharfer Durchblick. Sie hat viel erlebt und sieht durch jeden Schein. Direkt, fair, unbestechlich.",                                                                    rev: "Kälte, Verbitterung, übermäßige Kritik, emotionale Distanz als Schutz." },
  14: { rank: "König",   keywords: ["Intellekt"],         up: "Intellekt, Autorität, Wahrheit, Ethik, klare Kommunikation, analytischer Geist. Er urteilt mit dem Verstand, nicht mit dem Herzen – fair und präzise.",                                                                            rev: "Missbrauch von Macht, manipulativer Intellekt, Tyrannei durch kalte Logik." },
};

const pentaclesMeanings: SuitMeanings = {
  1:  { rank: "Ass",     keywords: ["Manifestation"],     up: "Manifestation, neues finanzielles Potenzial, materieller Neubeginn, Saat des Erfolgs. Eine Tür öffnet sich – finanziell, beruflich oder praktisch. Ergreife die Chance.",                                                           rev: "Verpasste Chancen, mangelnde Planung, materieller Verlust, fehlende Grundlage." },
  2:  { rank: "Zwei",    keywords: ["Balance"],           up: "Balance, Flexibilität, Jonglieren mit Ressourcen, Anpassungsfähigkeit. Du hältst mehrere Bälle in der Luft – mit Geschick und Humor.",                                                                                              rev: "Überlastung, finanzielle Instabilität, fehlende Prioritäten, alles droht zu entgleiten." },
  3:  { rank: "Drei",    keywords: ["Teamarbeit"],        up: "Teamarbeit, Handwerk, Zusammenarbeit, Anerkennung für Arbeit. Die ersten konkreten Ergebnisse zeigen sich – gemeinsam gebaut, gemeinsam gewürdigt.",                                                                                 rev: "Fehlende Teamarbeit, schlechte Kommunikation, mittelmäßige Ergebnisse, Einzelkämpfertum." },
  4:  { rank: "Vier",    keywords: ["Sicherheit"],        up: "Sicherheit, Kontrolle, Sparen, Besitz schützen. Du hältst fest, was du hast. Vorsicht ist gut – aber Geiz und übermäßige Kontrolle blockieren Wachstum.",                                                                          rev: "Loslassen von Besitz, Freigiebigkeit, materielle Verluste, Befreiung vom Festhalten." },
  5:  { rank: "Fünf",    keywords: ["Verlust"],           up: "Armut, Verlust, finanzielle Not, Isolation, spirituelle Verlassenheit. Du stehst in der Kälte – aber hinter dem beleuchteten Fenster ist Wärme. Hilfe ist näher als du denkst.",                                                   rev: "Erholung von Verlust, Unterstützung empfangen, spirituelle Erneuerung, der Weg aus der Not." },
  6:  { rank: "Sechs",   keywords: ["Großzügigkeit"],     up: "Großzügigkeit, Geben und Nehmen, Ausgleich. Du gibst oder empfängst – beides in Würde. Wohltaten fließen in die richtige Richtung.",                                                                                               rev: "Gier, Schulden, Geben mit versteckten Absichten, ungleiche Machtdynamik." },
  7:  { rank: "Sieben",  keywords: ["Geduld"],            up: "Geduld, langfristige Investition, Reflexion, Ausdauer. Du hast gesät und wartest auf die Ernte. Noch nicht Zeit zu ernten – aber die Früchte wachsen.",                                                                            rev: "Ungeduld, schlechte Investitionen, mangelnder Fortschritt, kurzfristiges Denken schadet langfristigen Zielen." },
  8:  { rank: "Acht",    keywords: ["Handwerk"],          up: "Handwerk, Fleiß, Meisterschaft, Lehrzeit, Aufmerksamkeit für Details. Du übst und verbesserst dich kontinuierlich. Qualität entsteht durch Wiederholung.",                                                                          rev: "Mittelmäßigkeit, fehlende Konzentration, schlechtes Handwerk, Abkürzungen die Qualität kosten." },
  9:  { rank: "Neun",    keywords: ["Überfluss"],         up: "Überfluss, Unabhängigkeit, Selbstständigkeit, verdient Genuss. Du hast es dir erarbeitet – jetzt darf genossen werden. Finanzielle und persönliche Autonomie.",                                                                     rev: "Selbstüberschätzung, finanzielle Abhängigkeit, mangelnde Disziplin, Verlust durch Faulheit." },
  10: { rank: "Zehn",    keywords: ["Wohlstand"],         up: "Langfristiger Wohlstand, Familienerbe, Generationenreichtum, materielle Sicherheit über Zeit. Der Höhepunkt materieller Erfüllung – nicht nur für dich, sondern für deine Familie.",                                                rev: "Familienkonflikte um Geld, Verlust von Erbe, finanzielle Instabilität, Bruch von Traditionen." },
  11: { rank: "Page",    keywords: ["Ehrgeiz"],           up: "Ehrgeiz, neues Lernen, praktische Fähigkeiten entwickeln, bodenständiger Fleiß. Ein neues Projekt oder Studium beginnt – mit Geduld und Einsatz wird es wachsen.",                                                                  rev: "Fehlende Ambition, Prokrastination, mangelnder Fokus, verpasste Gelegenheiten durch Trägheit." },
  12: { rank: "Ritter",  keywords: ["Verlässlichkeit"],   up: "Ausdauer, Verlässlichkeit, harte Arbeit, methodisches Vorgehen, langsam aber sicher. Er reitet langsam – aber er kommt immer ans Ziel. Zuverlässigkeit über Schnelligkeit.",                                                       rev: "Stagnation, Sturheit, Monotonie, zu risikoscheu, mangelnde Flexibilität." },
  13: { rank: "Königin", keywords: ["Fürsorge"],          up: "Fürsorge, Praktikabilität, häusliche Stärke, finanziell klug, erdende Energie. Sie erschafft ein Zuhause, wo andere aufblühen – und behält dabei den Überblick über die Finanzen.",                                                rev: "Finanzielle Unsicherheit, Selbstsucht, Unbalance zwischen Arbeit und Fürsorge, mangelnde Selbstfürsorge." },
  14: { rank: "König",   keywords: ["Wohlstand"],         up: "Wohlstand, Unternehmergeist, Verlässlichkeit, materieller Meister, sichere Führung. Er hat alles aufgebaut durch Fleiß und Weitsicht. Solider Erfolg, der bleibt.",                                                                rev: "Materialismus, Gier, instabiler Reichtum, schlechtes finanzielles Management trotz Ressourcen." },
};

const suits: Array<{
  key: Suit;
  name: "Stäbe" | "Kelche" | "Schwerter" | "Münzen";
  glyph: string;
  element: Element;
  meanings: SuitMeanings;
}> = [
  { key: "wands",     name: "Stäbe",     glyph: "🜂", element: "Feuer",  meanings: wandsMeanings },
  { key: "cups",      name: "Kelche",    glyph: "🜄", element: "Wasser", meanings: cupsMeanings },
  { key: "swords",    name: "Schwerter", glyph: "🜁", element: "Luft",   meanings: swordsMeanings },
  { key: "pentacles", name: "Münzen",    glyph: "🜃", element: "Erde",   meanings: pentaclesMeanings },
];

const minor: MinorCard[] = suits.flatMap((s) =>
  Object.entries(s.meanings).map(([rStr, seed]) => {
    const r = Number(rStr);
    return {
      type: "minor" as const,
      n: r,
      suit: s.key,
      suitName: s.name,
      element: s.element,
      glyph: s.glyph,
      name: `${seed.rank} der ${s.name}`,
      rank: seed.rank,
      keywords: seed.keywords,
      up: seed.up,
      rev: seed.rev,
    };
  })
);

export const ALL_CARDS: TarotCard[] = [...major, ...minor];

export function dailyIndex(): number {
  const d = new Date();
  const seed = d.getFullYear() * 1000 + d.getMonth() * 50 + d.getDate();
  return seed % ALL_CARDS.length;
}

export function toRoman(num: number): string {
  if (num === 0) return "0";
  const lookup: [string, number][] = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100],  ["XC", 90],  ["L", 50],  ["XL", 40],
    ["X", 10],   ["IX", 9],   ["V", 5],   ["IV", 4],  ["I", 1],
  ];
  let n = num, out = "";
  for (const [s, v] of lookup) {
    while (n >= v) { out += s; n -= v; }
  }
  return out;
}

export const ELEMENT_GLYPH: Record<Element, string> = {
  Feuer:  "🜂",
  Wasser: "🜄",
  Luft:   "🜁",
  Erde:   "🜃",
};
