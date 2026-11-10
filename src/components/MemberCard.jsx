function MemberCard(props) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card member-card h-100">
        <div className="photo-placeholder">
          {props.name.charAt(0)}
        </div>
        <div className="card-body text-center">
          <h4 className="card-title">{props.name}</h4>
          <h6 className="member-role">{props.role}</h6>
          <p className="card-text">
            {props.description}
          </p>
        </div>

      </div>
    </div>
  );
}
export default MemberCard;