USE [master]
GO
/****** Object:  Database [CustomerData]    Script Date: 3/14/2022 11:27:05 PM ******/
CREATE DATABASE [CustomerData]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CustomerData', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\CustomerData.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'CustomerData_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\CustomerData_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [CustomerData] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CustomerData].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CustomerData] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CustomerData] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CustomerData] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CustomerData] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CustomerData] SET ARITHABORT OFF 
GO
ALTER DATABASE [CustomerData] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CustomerData] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CustomerData] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CustomerData] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CustomerData] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CustomerData] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CustomerData] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CustomerData] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CustomerData] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CustomerData] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CustomerData] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CustomerData] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CustomerData] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CustomerData] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CustomerData] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CustomerData] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CustomerData] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CustomerData] SET RECOVERY FULL 
GO
ALTER DATABASE [CustomerData] SET  MULTI_USER 
GO
ALTER DATABASE [CustomerData] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CustomerData] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CustomerData] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CustomerData] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [CustomerData] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'CustomerData', N'ON'
GO
USE [CustomerData]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 3/14/2022 11:27:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerName] [nvarchar](50) NULL,
	[Class] [nvarchar](50) NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[Comment] [nvarchar](max) NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  StoredProcedure [dbo].[customer_Data]    Script Date: 3/14/2022 11:27:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[customer_Data]

 @CustomerName nvarchar(50),

    @Class nvarchar(50) ,

    @Phone nvarchar(50)  ,

    @Email nvarchar(50),

    @Comment nvarchar(max)

     as

     begin

     insert into [dbo].[Customers] values(@CustomerName,@Class,@Phone, @Email,@Comment )
     end
GO
USE [master]
GO
ALTER DATABASE [CustomerData] SET  READ_WRITE 
GO
