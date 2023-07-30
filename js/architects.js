// Enum for architect types
const ArchitectType = {
    COMMERCIAL: 'commercial-architect',
    RESIDENTIAL: 'residential-architect',
    GREEN_DESIGN: 'green-design-architect',
    INDUSTRIAL: 'industrial-architect',
    CONSERVATION: 'conservation-architect',
    LANDSCAPE: 'landscape-architect',
    URBAN_DESIGNER: 'urban-designer',
    INTERIOR: 'interior-architect',
  };
  
  // Function to customize HTML based on architect type
  function customizeHTMLForArchitect() {
    // Get the current URL
    var url = new URL(window.location.href);
  
    // Get the value of the "architect" parameter
    var architect = url.searchParams.get("architect");
  
    // Get the architect heading element
    var architectHeading = document.getElementById("architect-heading");
  
    // Check the architect type and update the heading content accordingly
    switch (architect) {
      case ArchitectType.COMMERCIAL:
        architectHeading.textContent = "How Commercial Architects That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
      case ArchitectType.RESIDENTIAL:
        architectHeading.textContent = "How Residential Architects That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
      case ArchitectType.GREEN_DESIGN:
        architectHeading.textContent = "How Green Design Architects That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
      case ArchitectType.INDUSTRIAL:
        architectHeading.textContent = "How Industrial Architects That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
      case ArchitectType.CONSERVATION:
        architectHeading.textContent = "How Conservation Architects That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
      case ArchitectType.LANDSCAPE:
        architectHeading.textContent = "How Landscape Architects That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
      case ArchitectType.URBAN_DESIGNER:
        architectHeading.textContent = "How Urban Designers That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
      case ArchitectType.INTERIOR:
        architectHeading.textContent = "How Interior Architects That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
      default:
        architectHeading.textContent = "How Architects That Use CasaQuest Increase Deals From Referrals by 20-40%";
        break;
    }
  }
  
  // Call the function to customize the HTML
  customizeHTMLForArchitect();
  