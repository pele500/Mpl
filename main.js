const CONTENT = [`קיבלנו משימה להציג את הגדרת התפקיד שלנו בדרכים יצירתיות, וחשבתי לעצמי, איזה דרך יותר טובה מאשר לפתח
לומדה שמסבירה מה תפקידה של מפתחת לומדה במל"י?
(תסלחו לי על העיצוב יש סיבה שנגה מעצבת לי הכל)`,
`קודם כל, כמו בכל לומדה יש לכן את החצים בתחתית המסך, החצים יאפשרו לכן לנווט בין עמודי הלומדה.
הלומדה לא תהיה יותר מידי ארוכה אני מבטיחה :)
`,
`רגע, מה זה לומדה בכלל?
לומדה היא תוכנת מחשב שמטרתה הקניית ידע ומיומנויות מוגדרות למשתמש בה.
ולמה צריך מפתחת לומדה בצה"ל?
בכלל צה"ל עוברות הכשרות והדרכות בהמון נושאים. 
בעידן של היום כבר הבנו שלא כולם מצליחים ללמוד בשיעור פרונטלי.
אז מה הפתרון? פיתוח תוצרים שכל אחד לומד בזמן שלו, בקצב שלו ובנוחות שלו.
`,
`מה כולל תפקידה של מפתחת הלומדה?
על מפתחת הלומדה לדעת להתאים את התוצר לצורך ההדרכתי ולקהל היעד.
לפעמים הצורך יהיה בלומדה שהיא נטו אינפורמטיבית ולפעמים יהיה צורך בלומדה משחקית יותר על מנת לעניין יותר את הלומדים שלנו.
לפעמים צריך לשלב בדיחות ולפעמים עדיף להשאיר את הלומדה עניינת.
`,``,
`אז הבנו מה זה אומר לומדה ומה התפקיד כולל.
אבל מה זה אומר להיות מפתחת לומדה במל"י?
זה אומר שחוץ מפיתוח הלומדות שכולנו מכירות גם אתר מל"י נמצא תחת תחום האחריות של מפתחת הלומדה.
מה זה אומר? 
מפתחת הלומדה אחראית על תחזוק האתר ומתן הרשאות במידת הצורך.
האתר הוכח כלא מספק מבחינת נפח אחסון ולכן זה נמצא בדיונים אצל מפקד מל"י ומתחיל תהליך שנקרא "מל"י דיגיטלי" ובעתיד כנראה שגם התהליך הזה יהיה תחת מפתחת הלומדה.
`,
`הגענו לסוף הלומדה.
אפשר לחפור שעות על הגדרת התפקיד שלי.
אבל כל הקטע בלומדה הוא לגרום לבן אדם שעובר אותה להישאר מעוניין ולא לשנוא את הלומדה.
אז ויתרתי על הכניסה לפרטים הקטנים אבל נתתי לכן הצצה לתפקיד שלי ולמה שאני עושה ביום יום שלי.
ותוך כדי שעשיתי את זה עשיתי את התפקיד שלי.
מקווה שאהבתן :)
`];

const STEPS_TITLES = [`פגישת התנעה וגיבוש קונספט`,`פיצוח הדרכתי ובניית תיק מסכים ראשוני`,`עיצוב תיק המסכים וקבלת אישור`,`בניית הלומדה בקוד`,`הפצת הלומדה לשימוש`];
const STEPS_CONTENT = [`ק' הצפ"ה ומפתחת הלומדה יושבות ביחד עם הלקוח לפגישה ראשונית.
ביחד עם הלקוח מגיעים להבנות החשובות.
מי קהל היעד? 
אזרחי או צה"לי?
איזה סוג לומדה (תרגול, מידע, משחק, מבחן)?
ומגבשים קונספט ראשוני ללומדה.
`,
`פיצוח הדרכתי ובניית תיק מסכים ראשוני
מפתחת הלומדה מעבדת את תוכן השיעור ומתאימה אותו ללמידה עצמית.
בנוסף מפתחת הלומדה בונה תיק מסכים ראשוני בעיצוב בסיסי על מנת להדגים את הקונספט של הלומדה. 
לאחר קבלת אישור על התיק מסכים הראשוני ממשיכים לעיצוב של תיק המסכים.
`,
`עיצוב תיק המסכים זה החלק שבו הגרפיקאית נכנסת לתמונה.
הגרפיקאית מעצבת את תיק המסכים בהתאם לקונספט שגובש על ידי מפתחת הלומדה והלקוח.
לאחר העיצוב מאשרים את תיק המסכים הסופי אל מול הלקוח ולאחר קבלת אישור אפשר להמשיך לשלב הבא.
`,
`עכשיו הגענו לשלב הכיף באמת. 
שלב הבנייה של הלומדה עצמה בקוד.
ישנן המון פלטפורמות פיתוח אפשריות. השימושית ביותר במל"י היא js vanilla אבל באפשרות מפתחת הלומדה לבחור בפלטפורמה שהכי נוחה לה.
`,
`לאחר סיום בניית הלומדה וקבלת אישור, הגיע הזמן להפיץ אותה לשימוש.
הדרך להפיץ אותה תלויה ברשת בה היא נבנתה.
במידה ומדובר ברשת הצה"לנט, נפיץ את הלומדה באמצעות אתר מל"י.
במידה ומדובר ברשת אזרחית נשתמש בgithub כפלטפורמת הפצה.
`];

let currPage = 0;

window.addEventListener("load", (e) => {
  document.getElementById("startBtn").addEventListener("click", startContent);
});


startContent = () => {
    document.getElementById("startBtn").style.display = "none";
    currPage++;
    document.getElementById("text").innerText = CONTENT[currPage];
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("back").style.visibility = "visible";
    document.getElementById("next").addEventListener("click", nextPage);
    document.getElementById("back").addEventListener("click", back);
}

nextPage = () => {
    currPage++;
    if(currPage != 4){
        document.getElementById("text").innerText = CONTENT[currPage];
        document.getElementById("text").style.visibility = "visible";
        document.getElementById("workFlowPage").style.visibility = "hidden";
    } else {
        document.getElementById("text").style.visibility = "hidden";
        document.getElementById("workFlowPage").style.visibility = "visible";
        for(let i=1; i<= 5; i++){
            document.getElementById(`step${i}`).addEventListener("click",openStep);
            document.getElementById("closeStep").addEventListener("click", ()=>{ document.getElementById("stepDescription").style.visibility = "hidden";
            document.getElementById("stepBackground").style.visibility = "hidden";})
        }
    }
    if(currPage === (CONTENT.length)-1){
        document.getElementById("next").style.visibility = "hidden";
    }
}

back = () => {
    currPage--;
    if(currPage == 0){
        document.getElementById("startBtn").style.display = "block";
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("back").style.visibility = "hidden";
        document.getElementById("text").innerText = CONTENT[currPage];
    } else if(currPage == 4){
        document.getElementById("text").style.visibility = "hidden";
        document.getElementById("workFlowPage").style.visibility = "visible";
        for(let i=1; i<= 5; i++){
            document.getElementById(`step${i}`).addEventListener("click",openStep);
            document.getElementById("closeStep").addEventListener("click", ()=>{ document.getElementById("stepDescription").style.visibility = "hidden";
            document.getElementById("stepBackground").style.visibility = "hidden";})
        }
    } else {
        document.getElementById("text").style.visibility = "visible";
        document.getElementById("workFlowPage").style.visibility = "hidden";
        document.getElementById("text").innerText = CONTENT[currPage];
    }
    if(currPage === (CONTENT.length)-2){
        document.getElementById("next").style.visibility = "visible";
    }

}

openStep = (e) => {
    document.getElementById("stepDescription").style.visibility = "visible";
    document.getElementById("underlineText").innerText = STEPS_TITLES[parseInt(e.target.id[4])-1];
    document.getElementById("stepText").innerText = STEPS_CONTENT[parseInt(e.target.id[4])-1];
    document.getElementById("stepBackground").style.visibility = "visible";
}