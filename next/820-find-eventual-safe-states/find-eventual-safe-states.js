/**
 * @param {number[][]} graph
 * @return {number[]}
 */
// This determines which applicants are considered "safe" for visa
const eventualSafeNodes = applicationData => {
    const totalApplicants = applicationData.length,  // Total applicants
          approvalStatus = {},  // Stores who's rejected, who's approved
          approvedApplicants = [];  // The lucky squad

    // Recursive function to check if an applicant is safe to approve based on their history
    const reviewApplication = applicant => {
        // We've seen this guy before, so here's their pre-judged fate
        if (applicant in approvalStatus)
            return approvalStatus[applicant];

        // Guilty until proven innocent
        approvalStatus[applicant] = false;

        // Review the applicant's connections
        for (let connection of applicationData[applicant])
            // One bad apple spoils the entire family tree of immigration hopes
            if (!reviewApplication(connection))
                return approvalStatus[applicant];

        // If all checks pass, approve the applicant (safe)
        return approvalStatus[applicant] = true;
    }

    // Let's sort this out
    for (let applicant = 0; applicant < totalApplicants; applicant++)
        // If an applicant is approved (safe), add them to the approved applicants list
        if (reviewApplication(applicant))
            approvedApplicants.push(applicant);

    // Return the list of approved applicants
    return approvedApplicants;
};