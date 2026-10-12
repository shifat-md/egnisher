import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import Badge from '../common/Badge';
import defaultAvatar from '../../assets/profile.svg';

export default function TeamCard({ member }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Profile photo */}
      <div className="relative aspect-square overflow-hidden bg-purple-50">
        <img
          src={member.image || defaultAvatar}
          alt={member.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = defaultAvatar;
          }}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex items-center space-x-3 text-white text-lg">
            {member.socials?.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s GitHub`}
                className="hover:text-egnisher-accent transition-colors"
              >
                <FaGithub />
              </a>
            )}
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s LinkedIn`}
                className="hover:text-egnisher-accent transition-colors"
              >
                <FaLinkedin />
              </a>
            )}
            {member.socials?.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s Twitter`}
                className="hover:text-egnisher-accent transition-colors"
              >
                <FaTwitter />
              </a>
            )}
            {member.socials?.dribbble && (
              <a
                href={member.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s Dribbble`}
                className="hover:text-egnisher-accent transition-colors"
              >
                <FaDribbble />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-egnisher-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-egnisher-secondary text-sm font-semibold mb-3">
            {member.role}
          </p>
          <p className="text-egnisher-neutral text-xs leading-relaxed mb-4">
            {member.bio}
          </p>
        </div>

        {/* Skills */}
        {member.skills && member.skills.length > 0 && (
          <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1">
            {member.skills.map((skill, idx) => (
              <Badge key={idx} variant="purple" size="sm">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
