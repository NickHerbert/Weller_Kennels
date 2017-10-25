class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_attached_file :avatar,
                    styles: { medium: "300x300>", thumb: "100x100>" },
                    :storage => :s3,
                    :s3_credentials => Proc.new{|a| a.instance.s3_credentials }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def s3_credentials
    {:bucket => "elasticbeanstalk-us-east-1-263144548927/weller_kennels/images/avatars/users",
     :access_key_id => ENV['AWSAccessKeyId'],
     :secret_access_key => ENV['AWSSecretKey']}
  end

  has_and_belongs_to_many :dogs

end
