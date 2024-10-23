// قائمة بأسماء الأساتذة ومسارات صور جداولهم
const teachers = [
    { name: "مراد بنبراهيم", timetable: "timetables/MouradBB.png" },
    { name: "نبيهة بوعلي", timetable: "timetables/NabihaB.png" },
    { name: "نجاة غومة", timetable: "timetables/NajetG.png" },
	{ name: "منية مرزوقي", timetable: "timetables/MoniaM.png" },
    { name: "بثينة عطية الله", timetable: "timetables/BouthaynaA.png" },
    { name: "حذامي سعيد", timetable: "timetables/HadhamiS.png" },
	{ name: "ليلى خلف", timetable: "timetables/LeilaK.png" },
    { name: "عمر سويد", timetable: "timetables/OmarS.png" },
    { name: "محجوب ناصري", timetable: "timetables/MahjoubN.png" },
	{ name: "محمّد بوشقراوي", timetable: "timetables/MohamedB.png" },
    { name: "عائشة بنطالب", timetable: "timetables/AichaBT.png" },
    { name: "منية حمزاوي", timetable: "timetables/MoniaH.png" },
    { name: "محمّد علي خضري", timetable: "timetables/MedAliK.png" },
    { name: "صالح الأحرش", timetable: "timetables/SalahL.png" },
    { name: "منية حميدي", timetable: "timetables/MoniaHm.png" },
	{ name: "مهدي بوعلي", timetable: "timetables/MehdiB.png" },
    { name: "رضا غودي", timetable: "timetables/RidaG.png" },
    { name: "طارق بنمحمّد", timetable: "timetables/TarekBM.png" },
	{ name: "عبدالنّاصر ميّاح", timetable: "timetables/AbNaceurM.png" },
	{ name: "عبد الله بنعمر", timetable: "timetables/AbdallaBA.png" },
	{ name: "عواطف بوسنينة", timetable: "timetables/AwatefB.png" },
    { name: "هيثم الدريسي", timetable: "timetables/HaythemD.png" },
    { name: "عفاف موسى", timetable: "timetables/AfefM.png" },
	{ name: "إلهام بنغانم", timetable: "timetables/IlhemBG.png" },
    { name: "ماهر القادري", timetable: "timetables/MaherK.png" },
    { name: "مراد الحكيم", timetable: "timetables/MouradH.png" },	
    // أضف المزيد من الأساتذة هنا
];

// تعبئة قائمة الأساتذة
const teacherSelect = document.getElementById("teacherSelect");
teachers.forEach(teacher => {
    const option = document.createElement("option");
    option.value = teacher.timetable;
    option.text = teacher.name;
    teacherSelect.appendChild(option);
});

// تحميل صورة جدول الأستاذ المحدد
teacherSelect.addEventListener("change", function() {
    const timetableContainer = document.getElementById("timetableContainer");
    const selectedTimetable = teacherSelect.value;

    if (selectedTimetable) {
        const img = document.createElement("img");
        img.src = selectedTimetable;
        img.alt = "جدول الأستاذ";
        img.classList.add("timetable-image");
        timetableContainer.innerHTML = "";
        timetableContainer.appendChild(img);
    } else {
        timetableContainer.innerHTML = "";
    }
});