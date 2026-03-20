import jsPDF from 'jspdf';
import { contactInfo, socialLinks } from '@/data/social';
import { experiences } from '@/data/experience';
import { skills } from '@/data/skills';
import { certifications } from '@/data/certifications';
import { projects } from '@/data/projects';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  let yPosition = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  const lineHeight = 5;

  // Helper function to add section heading
  const addSectionHeading = (heading: string) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 15;
    }
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(heading, margin, yPosition);
    yPosition += 8;
    doc.setDrawColor(100, 150, 200);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 6;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
  };

  // Helper function to add wrapped text
  const addWrappedText = (text: string, x: number, maxWidth: number, isItalic = false) => {
    if (isItalic) {
      doc.setFont('helvetica', 'italic');
    }
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line: string) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 15;
      }
      doc.text(line, x, yPosition);
      yPosition += lineHeight;
    });
    doc.setFont('helvetica', 'normal');
  };

  // Header - Name and Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(contactInfo.name, margin, yPosition);
  yPosition += 10;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(contactInfo.title, margin, yPosition);
  yPosition += 8;

  // Contact Information
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const contactText = `${contactInfo.location} • ${contactInfo.phone} • ${contactInfo.email}`;
  doc.text(contactText, margin, yPosition);
  yPosition += 6;

  const linkedInLink = socialLinks.find((l) => l.name === 'LinkedIn')?.url || '';
  const githubLink = socialLinks.find((l) => l.name === 'GitHub')?.url || '';
  const twitterLink = socialLinks.find((l) => l.name === 'Twitter')?.url || '';
  const socialText = `LinkedIn: ${linkedInLink} | GitHub: ${githubLink} | X: ${twitterLink}`;
  addWrappedText(socialText, margin, contentWidth);
  yPosition += 4;

  // Summary
  addSectionHeading('PROFESSIONAL SUMMARY');
  addWrappedText(contactInfo.summary, margin, contentWidth);
  yPosition += 4;

  // Experience
  addSectionHeading('WORK EXPERIENCE');
  experiences.forEach((exp) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 15;
    }

    doc.setFont('helvetica', 'bold');
    doc.text(`${exp.position}`, margin, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`${exp.company}`, margin, yPosition + 4);
    doc.text(`${exp.duration}`, pageWidth - margin - 30, yPosition);
    yPosition += 10;

    doc.setFontSize(9);
    addWrappedText(exp.description, margin, contentWidth);
    yPosition += 3;

    doc.setFont('helvetica', 'bold');
    doc.text('Key Achievements:', margin, yPosition);
    yPosition += 4;

    exp.highlights.slice(0, 4).forEach((highlight) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 15;
      }
      doc.setFont('helvetica', 'normal');
      addWrappedText(`• ${highlight}`, margin + 2, contentWidth - 2);
    });

    yPosition += 2;
  });

  // Skills
  addSectionHeading('TECHNICAL SKILLS');
  skills.forEach((skillGroup) => {
    if (yPosition > 260) {
      doc.addPage();
      yPosition = 15;
    }

    doc.setFont('helvetica', 'bold');
    doc.text(`${skillGroup.category}:`, margin, yPosition);
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    const skillNames = skillGroup.items.map((s) => s.name).join(', ');
    addWrappedText(skillNames, margin + 5, contentWidth - 5);
    yPosition += 2;
  });

  // Projects (Top Projects)
  addSectionHeading('FEATURED PROJECTS');
  const topProjects = projects.slice(0, 3);
  topProjects.forEach((project) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 15;
    }

    doc.setFont('helvetica', 'bold');
    doc.text(project.title, margin, yPosition);
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    addWrappedText(project.longDescription, margin, contentWidth);
    yPosition += 3;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    const techString = `Tech: ${project.technologies.join(', ')}`;
    addWrappedText(techString, margin, contentWidth);
    doc.setFont('helvetica', 'normal');
    yPosition += 2;
  });

  // Certifications
  if (certifications.length > 0) {
    addSectionHeading('CERTIFICATIONS');
    certifications.forEach((cert) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 15;
      }

      doc.setFont('helvetica', 'bold');
      doc.text(cert.title, margin, yPosition);
      yPosition += 4;

      doc.setFont('helvetica', 'normal');
      doc.text(`${cert.issuer} - ${cert.issueDate}`, margin, yPosition);
      yPosition += 5;
    });
  }

  // Education
  addSectionHeading('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.text('MBA in Finance and IT', margin, yPosition);
  yPosition += 4;
  doc.setFont('helvetica', 'normal');
  doc.text('Osmania University, Hyderabad - 2013', margin, yPosition);
  yPosition += 6;

  // Save PDF
  doc.save(`${contactInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
};
