// Fixing the code to remove the signature declaration
function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS'];
    var member = {
        skills: skills,
        addSkill: function(skill) {
        skills.push(skill);
        },
        removeSkill: function(skill) {
        skills.splice(skills.indexOf(skill), 1);
        }
    };
    return member;
}
